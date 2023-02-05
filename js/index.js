let movieList = document.querySelector("#movie-list > tbody");

const movieAppend = (movie) => {
	movieList.insertAdjacentHTML("afterbegin", movieRow(movie));
}

const movieRow = (movie) => {
	return `<tr>
		<td><input type="checkbox"></td>
		<td class="editable item-number">${movie.number} <div class="action"><i class="ri-pencil-line"></td>
		<td class="poster"><img src="${movie.poster}"></td>
		<td class="table-inside">
			<table class="inner-table">
				<tr>
					<th class="editable">Title <div class="action"><i class="ri-pencil-line"></i></div></th>
					<th class="editable">Synopsis <div class="action"><i class="ri-pencil-line"></i></div></th>
					<th class="editable">Starring <div class="action"><i class="ri-pencil-line"></i></div></th>
					<th class="editable">Added <div class="action"><i class="ri-pencil-line"></i></div></th>
				</tr>
				<tr>
					<td>${movie.title}</td>
					<td rowspan="3">${movie.synopsis}</td>
					<td>${movie.starring}</td>
					<td>${movie.added}</td>
				</tr>
				<tr>
					<th class="editable">Year <div class="action"><i class="ri-pencil-line"></i></div></th>
					<th class="editable">Directed by <div class="action"><i class="ri-pencil-line"></i></div></th>
					<th>Edited</th>
				</tr>
				<tr>
					<td>${movie.year}</td>
					<td>${movie.director}</td>
					<td>${movie.edited}</td>
				</tr>
			</table>
		</td>
		<td>
			<div class="actions">
				<i class="ri-pencil-line"></i>
				<i class="ri-delete-bin-line"></i>
			</div>
		</td>
	</tr>`;
}

fetch("data/movies.json")
	.then(r => r.json())
	.then(myJson => myJson.forEach(movieAppend))
