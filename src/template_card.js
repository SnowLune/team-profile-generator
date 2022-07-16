const card = 
`
<div class="card">
   <div class="card-body">
      <h5 class="card-title">{{NAME}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ROLE}}</h6>
      <ul class="list-group list-group-flush">
         <li class="list-group-item">{{ID}}</li>
         <li class="list-group-item">
            <a href="mailto://{{EMAIL}}">{{EMAIL}}</a>
         </li>
         <li class="list-group-item">{{GITHUB}}</li>
         <li class="list-group-item">{{SCHOOL}}</li>
      </ul>
   </div>
</div>

`;
module.exports = card;

