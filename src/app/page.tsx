
import { Key } from "react";
import TicketTile from "./components/TicketTile";

const getAllTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-cache",
    });
    return res.json();
  }
  catch (error) {
    console.log("Failed to fetch Tickets: ", error)
  }
}

export default async function DashBoard() {

  const { tickets } = await getAllTickets();

  const uniqueCategory = Array.from(new Set(tickets.map((ticket: { category: any; }) => ticket.category)));

  console.log(uniqueCategory);

  return (
    <main className="min-h-screen px-6 pt-2">
      <section>
        {tickets && uniqueCategory.map((categoryHeader: any, index: number) => {
          return (
            <>
              <h1 className="text-white mt-6 mb-2">
                {categoryHeader}s
              </h1>
              <div className="lg:grid gap-4 lg:grid-cols-2 xl:grid-cols-4 ">
                {
                  tickets
                    .filter((ticket: { category: any; }) => ticket.category == categoryHeader)
                    .map((ticket: { id: Key; }) => {
                      return (
                        <TicketTile key={ticket.id} ticket={ticket} />
                      )
                    })
                }
              </div>
            </>
          )
        })
        }
      </section>
    </main>
  )
}
