---
title: Verwendung von elementspezifischen View-Transitions
short-title: Elementspezifische View-Transitions
slug: Web/API/View_Transition_API/Using_element-scoped
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{DefaultAPISidebar("View Transition API")}}

Elementspezifische View-Transitions sind auf einen bestimmten DOM-Teilbaum eines Elements beschränkt. Sie bieten viele Vorteile gegenüber dokumentenspezifischen View-Transitions: Sie können Übergänge auf Unterabschnitten des Dokuments anwenden, während der Rest interaktiv bleibt, mehrere Übergänge gleichzeitig ausführen — einschließlich verschachtelter Übergänge — und verschiedene andere Probleme lösen.

Dieser Artikel behandelt, wie elementspezifische View-Transitions funktionieren und wie man sie verwendet.

> [!NOTE]
> "Dokumentenspezifische View-Transitions" beziehen sich auf gleiche Dokumentenübergänge, also Übergänge, die über die Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) initiiert werden.
>
> Elementspezifische View-Transitions werden über die gleiche Methode gestartet, die auf einem einzelnen Element aufgerufen wird (siehe [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)). Elementspezifische View-Transitions sind nicht für dokumentübergreifende Übergänge verfügbar.

## Probleme mit dokumentenspezifischen View-Transitions

Dokumentenspezifische View-Transitions sind nützlich, um DOM-Inhaltsaktualisierungen über ein ganzes Dokument hinweg zu animieren. Sie können [verschiedene Animationen auf verschiedene Teile der Seite](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) anwenden, eine einzige Übergangsanimation auf die gesamte Seite oder keine Animationen.

Sie können auch verschiedene [View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) verwenden, um je nach Umstand unterschiedliche Animationen auf das gleiche Element anzuwenden - zum Beispiel, ob es das nächste oder vorherige Element in einer Sequenz ist.

Allerdings haben dokumentenspezifische View-Transitions mehrere Nachteile:

- Sie können nicht mehr als eine View-Transition gleichzeitig ausführen.
- Wenn ein View-Transition läuft, ist die Seite nicht interaktiv, bis der Übergang abgeschlossen ist.
- Der [Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements), der mit einer dokumentenspezifischen View-Transition verbunden ist, liegt über allem anderen auf der Seite. Wenn ein anderes Element über dem aktualisierenden Teil der Seite positioniert ist, wenn die Übergangsanimation startet (zum Beispiel durch Verwendung von {{cssxref("z-index")}}), verschwindet das positionierte Element während der Dauer der Animation unter dem Übergang, was wahrscheinlich nicht der gewünschte Effekt ist.
- In Bezug auf das vorherige Problem: Wenn der aktualisierende Teil der Seite von einem übergeordneten Wrapper mit {{cssxref("overflow")}} abgeschnitten wird, wird er beim Start der Animation aus dem Container herausragen.

Elementspezifische View-Transitions können diese Probleme lösen. Schauen wir uns einige Beispiele an, um zu sehen, wie das funktioniert.

## Grundlegendes elementspezifisches Beispiel

Dieses Beispiel enthält eine Liste von Links. Wenn ein Link angeklickt wird, ändert sich sein Inhalt und diese Änderung wird durch eine elementspezifische View-Transition animiert. Das Beispiel enthält auch ein Element, das das übergehende Element leicht überlappt; wir verwenden dies, um zu zeigen, wie `z-index`-Probleme vermieden werden können.

### HTML

Das Markup enthält eine {{htmlelement("ul")}}-Liste von Links zwischen zwei {{htmlelement("p")}}-Elementen, die Textinhalte enthalten.

```html live-sample___basic-element-scoped
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>

<ul>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
</ul>

<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

Wir beginnen damit, dem `<ul>` einen Hintergrund und eine {{cssxref("border")}}-Stilisierung zu geben. Wir geben ihm auch eine {{cssxref("position")}} von `relative`, sodass wir Nachkommen relativ zum `<ul>` absolut positionieren können.

```css hidden live-sample___basic-element-scoped
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px;
  text-align: center;
  background: white;
  margin: 10px;
  outline: none;
}
```

```css live-sample___basic-element-scoped
ul {
  border: 2px solid #999;
  background: #ccc;
  position: relative;
}
```

Als nächstes geben wir den {{htmlelement("a")}}-Elementen ihre eigenen `border`-Stile und wenden eine {{cssxref("transition")}} an, sodass Aktualisierungen des `border`-Stils bei Zustandsänderungen sanft animiert werden. Bei {{cssxref(":hover")}} und {{cssxref(":focus")}} ändern wir die Link-{{cssxref("border-color")}} zu `black`.

```css live-sample___basic-element-scoped
a {
  border: 2px solid #aaa;
  transition: border 0.6s;
}

a:hover,
a:focus {
  border-color: black;
}
```

Der relevanteste CSS-Code für View-Transitions definiert benutzerdefinierte `animation`-Einstellungen für die [old](/de/docs/Web/CSS/Reference/Selectors/::view-transition-old) und [new](/de/docs/Web/CSS/Reference/Selectors/::view-transition-new) Transition-Zustände, die den alten DOM-Zustand herausrotieren und den neuen DOM-Zustand hereinrotieren. Beachten Sie, dass wir einen {{cssxref("animation-delay")}}-Wert auf die `rotate-in`-Animation angewendet haben (der zweite `0.3s`-Wert), um sicherzustellen, dass sie nur dann startet, wenn die `rotate-out`-Animation endet.

```css live-sample___basic-element-scoped
::view-transition-old(*) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(*) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}

@keyframes rotate-out {
  from {
    rotate: 0deg x;
  }

  to {
    rotate: 90deg x;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg x;
  }

  to {
    rotate: 0deg x;
  }
}
```

Abschließend erstellen wir einige generierte Inhalte auf dem `<ul>`-Element mithilfe des {{cssxref("::before")}}-Pseudoelements und positionieren es über dem `<ul>`-Element. Der generierte Inhalt enthält einen transparenten Verlaufs-Effekt.

```css live-sample___basic-element-scoped
ul::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5px;
  width: 100px;
  background-image: linear-gradient(
    to right,
    rgb(255 255 255),
    rgb(255 255 255) 25%,
    rgb(255 255 255 / 0)
  );
  z-index: 1;
}
```

### JavaScript

Im Skript holen wir uns eine Referenz auf das `<ul>`-Element und fügen ihm einen `click`-Event-Listener hinzu. Wenn es angeklickt wird, prüfen wir, ob das Ereignisziel ein `<a>`-Element ist. Falls ja, rufen wir [`startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) auf dem angeklickten `<a>`-Element auf und wechseln seinen Inhalt zwischen "Standard" und "Alternative" durch die `toggleText()`-Funktion.

Beachten Sie, dass wir auch eine Funktionsprüfung eingefügt haben, um sicherzustellen, dass der Code in Browsern funktioniert, die `startViewTransition()` nicht unterstützen: Bevor `startViewTransition()` ausgeführt wird, prüfen wir, ob es auf dem Zielelement existiert. Wenn nicht, führen wir einfach die `toggleText()`-Funktion aus und `return`, sodass das DOM trotzdem aktualisiert wird, aber ohne die Übergangsanimation.

```js live-sample___basic-element-scoped
const list = document.querySelector("ul");

list.addEventListener("click", handleClick);

function handleClick(e) {
  function toggleText() {
    if (e.target.textContent === "Standard") {
      e.target.textContent = "Alternative";
    } else {
      e.target.textContent = "Standard";
    }
  }
  if (e.target.tagName === "A") {
    if (!e.target.startViewTransition) {
      toggleText();
      return;
    }
    e.target.startViewTransition(() => {
      toggleText();
    });
  }
}
```

### Ergebnis

{{embedlivesample("basic-element-scoped", "100%", "520")}}

Klicken/Aktiveren Sie die Links, um die View-Transition auf jedem zu sehen.

Jedes `<a>`-Element hat seine eigene View-Transition, die nur auf dieses Element beschränkt ist. Der Rest der Seite bleibt während einer laufenden View-Transition interaktiv, sodass Sie mehrere View-Transitions gleichzeitig ausführen können. Darüber hinaus bleiben die sich überlappenden erzeugten Inhalte über den übergehenden Elementen.

## Unterschiede zwischen element- und dokumentenspezifischen Übergängen

Das vorherige Beispiel zeigt, wie elementspezifische View-Transitions einige der Probleme ihrer dokumentenspezifischen Gegenstücke beheben. Dies ist größtenteils der unterschiedlichen Platzierung der Pseudoelement-Bäume zu verdanken. Anstatt dem {{cssxref(":root")}}-Element hinzugefügt zu werden, fügt der Browser elementspezifische View-Transition-Bäume dem Element hinzu, auf dem `Element.startViewTransition()` aufgerufen wird.

Im vorherigen Beispiel würde einer der Pseudoelement-Bäume so aussehen:

```plain
<a href="#">
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  |
  |
  "Alternative"
</a>
```

Dies bedeutet, dass der Übergang auf das `<a>`-Element (als "Transition Root" oder "Scope" bezeichnet) und dessen DOM-Inhalte beschränkt ist, sodass er andere Elemente oder laufende View-Transitions nicht beeinträchtigt. Wenn die View-Transition startet, sucht der Browser nur innerhalb dieses Scopes nach Elementen, die in Schnappschüsse aufgenommen werden sollen. Während des Snapshot-Prozesses - bis das Versprechen [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt ist - wird das Rendering nur innerhalb des Scopes angehalten.

Das `::view-transition`-Pseudoelement hat die gleiche Größe und Form wie das Übergangselement und rendert nur darüber, nicht über den Rest der Seite. Dadurch wird die Layer-Reihenfolge von Elementen außerhalb des Übergangselements respektiert.

## Selbstteilnahme von Scopes und Beschneidung

Ein weiteres wichtiges Merkmal von elementspezifischen View-Transitions ist, dass das übergehende Element, wenn es von seinem Container abgeschnitten wird (z. B. durch `overflow: scroll`), während der Übergangsanimation abgeschnitten bleibt.

Dies geschieht, weil auf dem Root-Element des Scopes automatisch Folgendes gesetzt wird:

- Ein {{cssxref("view-transition-name")}}-Wert von `root`, der sicherstellt, dass das Root-Element an seinem eigenen Übergang teilnimmt (als Selbstteilnahme bezeichnet).
- Ein `view-transition-group`-Wert von `contain`, der [verschachtelte View-Transition-Gruppen](https://developer.chrome.com/docs/css-ui/view-transitions/nested-view-transition-groups) für den Scope aktiviert. Ein {{cssxref("overflow")}}-Wert von `clip` wird dann auf das resultierende {{cssxref("::view-transition-group()")}}-Pseudoelement gesetzt, was dazu führt, dass die Inhalte des Pseudoelement-Baums zum Scope abgeschnitten werden.
- Ein {{cssxref("view-transition-scope")}}-Wert von `all`, der sicherstellt, dass {{cssxref("view-transition-name")}}-Werte auf den Unterbaum des Elements begrenzt sind (siehe [Verschachtelte elementspezifische View-Transitions](#verschachtelte_elementspezifische_view-transitions) für weitere Details).

> [!NOTE]
> Sie können einen View-Transition aus der Selbstteilnahme herausnehmen, indem Sie `view-transition-name: none` auf dem Übergangselement setzen. Dies kann jedoch zu unerwünschtem Verhalten führen, wie das Austreten des Übergangs aus dem Root-Element in Abschneidefällen. Wenn Sie dies tun, testen Sie sorgfältig und stellen Sie sicher, dass der Scope seine Inhalte nicht abschneidet.

Schauen wir uns ein weiteres Beispiel an, diesmal um das Abschneideverhalten zu demonstrieren.

### HTML

Das HTML ähnelt dem vorherigen Beispiel, außer dass das zentrale Element jetzt ein {{htmlelement("section")}} ist, das ein Absatz mit Text enthält. Wir fügen auch einen {{htmlelement("button")}} hinzu, der gedrückt werden kann, um den Absatzinhalt zu ändern.

```html live-sample___element-scoped-clipping
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>

<section>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumber before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<button>Change!</button>

<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

Zunächst setzen wir eine feste `height` und `overflow-y: scroll` auf das `<section>`, damit der `<p>`-Inhalt vertikal scrollt.

```css hidden live-sample___element-scoped-clipping
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section {
  border: 2px solid #999;
  background: #ddd;
  margin: 0 auto;
}

section p {
  margin: 1rem 5rem;
}

@keyframes rotate-out {
  from {
    rotate: 0deg y;
  }

  to {
    rotate: 90deg y;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg y;
  }

  to {
    rotate: 0deg y;
  }
}
```

```css live-sample___element-scoped-clipping
section {
  height: 150px;
  overflow-y: scroll;
}
```

Als nächstes setzen wir ein {{cssxref("view-transition-name")}} auf das verschachtelte `<p>`-Element, mit übereinstimmenden Namen in den benutzerdefinierten {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudo-Elementen. Dies bedeutet, dass nur `<p>` animiert wird, nicht der Rest des Übergangs-Scopes.

```css live-sample___element-scoped-clipping
section p {
  view-transition-name: content;
}

::view-transition-old(content) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(content) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}
```

Der Kürze halber ist der {{cssxref("@keyframes")}} Definitionscode verborgen. Er ist nahezu identisch mit dem [vorherigen Beispiel](#css:~:text=%40keyframes%20rotate%2Dout); der einzige Unterschied besteht darin, dass die Rotation in diesem Beispiel um die y-Achse und nicht um die x-Achse erfolgt.

### JavaScript

Das Script definiert ein `content`-Array, das zwei unterschiedliche Zeichenfolgen enthält, um den `<p>`-Inhalt zu wechseln. Wir holen uns dann Referenzen auf die `<section>`, `<p>`, und `<button>`-Elemente.

```js hidden live-sample___element-scoped-clipping
const content = [
  "I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon eanarwhal asymmetrical. Af health goth shaman in slow-carb godard echopark. Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor lumber before they sold out dreamcatcher single-origin coffee.",
  "Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon. Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan. Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four loko adaptogen taiyaki truffaut hexagon neutral milk hotel.",
];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

```js
const content = ["I'm baby xOXO ...", "Kombucha laborum ..."];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

Als nächstes fügen wir dem `<button>` einen `click`-Event-Listener hinzu. Jedes Mal, wenn der Button angeklickt wird, wird eine View-Transition ausgelöst: Innerhalb des `startViewTransition()`-Aufrufs wird der `textContent` des `<p>`-Elements durch die `toggleText()`-Funktion zwischen den beiden `content`-Array-Elementen gewechselt. Wir haben auch eine einfache Funktionsprüfung eingefügt, die zurückfällt auf das direkte Ausführen von `toggleText()` in Browsern, die `Element.startViewTransition()` nicht unterstützen.

```js live-sample___element-scoped-clipping
btn.addEventListener("click", handleClick);

function toggleText() {
  if (para.className === "1") {
    para.className = "0";
  } else {
    para.className = "1";
  }
  para.textContent = content[Number(para.className)];
}

function handleClick() {
  if (!section.startViewTransition) {
    toggleText();
    return;
  }
  const vt = section.startViewTransition(() => {
    toggleText();
  });
}
```

### Ergebnis

{{embedlivesample("element-scoped-clipping", "100%", "520")}}

Klicken Sie auf den Button und beachten Sie, wie der Übergang nicht aus dem `<section>` herausfließt — er bleibt auf den Übergangs-Scopes beschränkt.

## Verschachtelte elementspezifische View-Transitions

Ein weiterer Aspekt von elementspezifischen View-Transitions, der erwähnenswert ist, ist, dass Sie View-Transitions verschachteln und sie gleichzeitig ohne Beeinträchtigungen ausführen können. Dies ist möglich, weil, wie bereits erwähnt, der Browser automatisch einen {{cssxref("view-transition-scope")}}-Wert von `all` auf die Scope-Root-Elemente anwendet. Dies stellt sicher, dass {{cssxref("view-transition-name")}}-Werte auf den Unterbaum des Elements beschränkt sind und verhindert, dass Elemente und ihre Inhalte von einem äußeren, gleichzeitigen View-Transition erfasst werden. Browser ignorieren Elemente, die `view-transition-scope: all` haben, während des Snapshot-Prozesses.

Schauen wir uns eine Demonstration von verschachtelten elementspezifischen View-Transitions an.

Das HTML ist das gleiche wie für das [erste Beispiel](#grundlegendes_elementspezifisches_beispiel), außer dass es jetzt zwei Listen mit Links innerhalb eines zusätzlichen Wrapper-Elements gibt.

```html hidden live-sample___element-scoped-nested
<p>
  I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea narwhal
  asymmetrical.
</p>
<div class="wrapper">
  <ul class="one">
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
  </ul>

  <ul class="two">
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
    <li><a href="#">Standard</a></li>
  </ul>
</div>
<p>
  Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
  bespoke.
</p>
```

### CSS

Die beiden Listen sind innerhalb des `.wrapper`-Elements nebeneinander mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) angeordnet. Wir geben dem Wrapper ein `view-transition-name` von `wrapper` und dann geben wir jeder Liste eine andere Hintergrundfarbe:

```css hidden live-sample___element-scoped-nested
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
  border: 2px solid #999;
  margin: 0 auto;
  position: relative;
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px;
  text-align: center;
  background: white;
  margin: 10px;
  border: 2px solid #aaa;
  transition: border 0.6s;
}

a:hover,
a:focus {
  border-color: black;
  outline: none;
}

@keyframes rotate-out {
  from {
    rotate: 0deg x;
  }

  to {
    rotate: 90deg x;
  }
}

@keyframes rotate-in {
  from {
    rotate: -90deg x;
  }

  to {
    rotate: 0deg x;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```css live-sample___element-scoped-nested
.wrapper {
  display: flex;
  gap: 20px;
  view-transition-name: wrapper;
}

.one {
  background-color: orange;
}

.two {
  background-color: green;
}
```

Wir wenden auch unterschiedliche Animationen auf die allgemeinen alten und neuen Übergangspseudo-Elemente an und dann separate Animationen auf die alten und neuen Übergangspseudo-Elemente des `wrappers`:

```css live-sample___element-scoped-nested
::view-transition-old(*) {
  animation: rotate-out 0.3s 1 both linear;
}

::view-transition-new(*) {
  animation: rotate-in 0.3s 0.3s 1 both linear;
}

::view-transition-old(wrapper) {
  animation: fade-out 0.3s 1 both linear;
}

::view-transition-new(wrapper) {
  animation: fade-in 0.3s 0.3s 1 both linear;
}
```

Wir haben den Rest des CSS der Kürze halber verborgen.

### JavaScript

Das JavaScript ist dem ersten Beispiel ähnlich, außer dass hier zwei elementspezifische View-Transitions gleichzeitig ausgeführt werden, jedes Mal wenn ein Link angeklickt wird. Der erste wechselt den Text des Links zwischen "Standard" und "Alternative" (über die `toggleText()`-Funktion) und der zweite tauscht die Position der beiden Listen innerhalb des DOM (über die `togglePosition()`-Funktion). Wie zuvor haben wir Funktionsprüfcode eingefügt, sodass das Beispiel weiterhin in Browsern funktioniert, die `Element.startViewTransition()` nicht unterstützen.

```js live-sample___element-scoped-nested
const lists = document.querySelectorAll("ul");
const wrapper = document.querySelector(".wrapper");

lists.forEach((list) => {
  list.addEventListener("click", handleClick);
});

function handleClick(e) {
  function toggleText() {
    if (e.target.textContent === "Standard") {
      e.target.textContent = "Alternative";
    } else {
      e.target.textContent = "Standard";
    }
  }
  function togglePosition() {
    if (lists[0].nextElementSibling === lists[1]) {
      wrapper.insertBefore(lists[1], lists[0]);
    } else {
      wrapper.insertBefore(lists[0], lists[1]);
    }
  }
  if (e.target.tagName === "A") {
    if (!e.target.startViewTransition) {
      toggleText();
      togglePosition();
      return;
    }

    e.target.startViewTransition(() => {
      toggleText();
    });
    wrapper.startViewTransition(() => {
      togglePosition();
    });
  }
}
```

### Ergebnis

{{embedlivesample("element-scoped-nested", "100%", "520")}}

Klicken Sie auf den Text innerhalb eines beliebigen Feldes. Beachten Sie, wie das Umschalten des Textes und das Austauschen der Listen gleichzeitig geschehen - beide verschachtelten Übergänge laufen gleichzeitig ohne Beeinträchtigung.

## Abfragen von aktiven View-Transitions

Die folgenden Eigenschaften ermöglichen es Ihnen, aktive elementspezifische View-Transitions abzufragen:

- [`ViewTransition.transitionRoot`](/de/docs/Web/API/ViewTransition/transitionRoot): Gibt eine Referenz auf das Root-Element des View-Transition-Scopes zurück.
- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition): Gibt eine Referenz auf eine aktive `ViewTransition` eines Elements zurück, falls vorhanden.

Zum Beispiel, wenn Sie die während eines Übergangs aktiven Animationen auf einem Element in irgendeiner Weise verarbeiten möchten, können Sie auf diese über `transitionRoot` zugreifen:

```js
function processAnimations(transition) {
  const anims = transition.transitionRoot.getAnimations();
  // ...
}

// ...

const transition = el.startViewTransition();
transition.ready.then(() => processAnimations(transition));
```

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Führen Sie gleichzeitige und verschachtelte View-Transitions mit elementspezifischen View-Transitions aus](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) auf developer.chrome.com
