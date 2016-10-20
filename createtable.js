    function CreateTableFromJSON() {

		var myBooks = [];
	    
		$.getJSON('books.json', function(data) {
				//alert(data.Books[0][col[0]]);
				//alert(Object.keys(data.Books[0]))
				//alert(data.Books[0]["Book Name"])
				
		        // EXTRACT VALUE FOR HTML HEADER. 
				// ('Book ID', 'Book Name', 'Category' and 'Price')
				var col = [];
				for (var i = 0; i < data.myBooks.length; i++) {
					for (var key in data.myBooks[i]) {
						if (col.indexOf(key) === -1) {
							col.push(key);
						}
					}
				}
		
				// CREATE DYNAMIC TABLE.
				var table = document.createElement("table");
				table.className = "table table-striped table-bordered table-condensed table-hover";
				// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
		
				var tr = table.insertRow(-1);                   // TABLE ROW.
		
				for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");      // TABLE HEADER.
					th.innerHTML = col[i];
					tr.appendChild(th);
				}
		
				// ADD JSON DATA TO THE TABLE AS ROWS.
				for (var i = 0; i < data.myBooks.length; i++) {
		
					tr = table.insertRow(-1);
		
					for (var j = 0; j < col.length; j++) {
						var tabCell = tr.insertCell(-1);
						tabCell.innerHTML = data.myBooks[i][col[j]];
					}
				}
		
				// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
				var divContainer = document.getElementById("showData");
				divContainer.innerHTML = "";
				divContainer.appendChild(table);
				
				
			}
		);
		
		//var myBooks = [
        //    {
        //        "Book ID": "1",
        //        "Book Name": "Computer Architecture",
        //        "Category": "Computers",
        //        "Price": "125.60"
        //    },
        //    {
        //        "Book ID": "2",
        //        "Book Name": "Asp.Net 4 Blue Book",
        //        "Category": "Programming",
        //        "Price": "56.00"
        //    },
        //    {
        //        "Book ID": "3",
        //        "Book Name": "Popular Science",
        //        "Category": "Science",
        //        "Price": "210.40"
        //    }
        //]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        //var col = [];
        //for (var i = 0; i < myBooks.length; i++) {
        //    for (var key in myBooks[i]) {
        //        if (col.indexOf(key) === -1) {
        //            col.push(key);
        //        }
        //    }
        //}
        //
        //// CREATE DYNAMIC TABLE.
        //var table = document.createElement("table");
		//table.className = "table table-striped table-bordered table-condensed table-hover";
        //// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        //
        //var tr = table.insertRow(-1);                   // TABLE ROW.
        //
        //for (var i = 0; i < col.length; i++) {
        //    var th = document.createElement("th");      // TABLE HEADER.
        //    th.innerHTML = col[i];
        //    tr.appendChild(th);
        //}
        //
        //// ADD JSON DATA TO THE TABLE AS ROWS.
        //for (var i = 0; i < myBooks.length; i++) {
        //
        //    tr = table.insertRow(-1);
        //
        //    for (var j = 0; j < col.length; j++) {
        //        var tabCell = tr.insertCell(-1);
        //        tabCell.innerHTML = myBooks[i][col[j]];
        //    }
        //}
        //
        //// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        //var divContainer = document.getElementById("showData");
        //divContainer.innerHTML = "";
        //divContainer.appendChild(table);
    }
