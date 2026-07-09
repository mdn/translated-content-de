---
title: Verwendung von element-gebundenen View-Übergängen
short-title: Element-gebundene View-Übergänge
slug: Web/API/View_Transition_API/Using_element-scoped
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{DefaultAPISidebar("View Transition API")}}

Element-gebundene View-Übergänge sind auf den DOM-Teilbaum eines bestimmten Elements begrenzt. Sie haben viele Vorteile gegenüber dokumentbezogenen View-Übergängen: Sie können Übergänge auf Unterabschnitten des Dokuments ausführen, während der Rest interaktiv bleibt, mehrere Übergänge gleichzeitig ausführen – einschließlich verschachtelter Übergänge – und mehrere andere Probleme lösen.

Dieser Artikel behandelt, wie element-gebundene View-Übergänge funktionieren und wie man sie verwendet.

> [!NOTE]
> "Dokument-gebundene View-Übergänge" beziehen sich auf Übergänge im selben Dokument, d.h. Übergänge, die über die Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) initiiert werden.
>
> Element-gebundene View-Übergänge werden über dieselbe Methode initiiert, die auf einem individuellen Element aufgerufen wird (siehe [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)). Element-gebundene View-Übergänge stehen für dokumentübergreifende Übergänge nicht zur Verfügung.

## Probleme mit dokumentbezogenen View-Übergängen

Dokument-gebundene View-Übergänge sind nützlich, um DOM-Inhaltsaktualisierungen über ein ganzes Dokument hinweg zu animieren. Sie können [verschiedene Animationen auf verschiedene Teile der Seite anwenden](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements), eine einzige Übergangsanimation auf die gesamte Seite oder gar keine Animationen.

Sie können auch verschiedene [View-Übergangstypen](/de/docs/Web/API/View_Transition_API/Using_types) verwenden, um je nach Umstand – zum Beispiel, ob es sich um das nächste oder vorherige Element in einer Sequenz handelt – verschiedene Animationen auf dasselbe Element anzuwenden.

Dokument-gebundene View-Übergänge haben jedoch mehrere Nachteile:

- Sie können nicht mehr als einen View-Übergang gleichzeitig ausführen.
- Wenn ein View-Übergang stattfindet, ist die Seite bis zum Ende des Übergangs nicht interaktiv.
- Der mit einem dokument-gebundenen View-Übergang assoziierte [Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements) sitzt über allem anderen auf der Seite. Wenn ein anderes Element beim Start der Übergangsanimation über dem aktualisierenden Teil der Seite positioniert ist (zum Beispiel durch Verwendung von {{cssxref("z-index")}}), verschwindet das positionierte Element während der Dauer der Animation unter dem Übergang, was wahrscheinlich nicht der gewünschte Effekt ist.
- Im Zusammenhang mit dem vorherigen Problem: Wenn der aktualisierende Teil der Seite durch einen übergeordneten Wrapper mithilfe von {{cssxref("overflow")}} abgeschnitten wird, ragt er beim Start der Animation aus dem Container heraus.

Element-gebundene View-Übergänge können diese Probleme lösen. Werfen wir einen Blick auf einige Beispiele, um zu sehen, wie das funktioniert.

## Einfaches element-gebundenes Beispiel

Dieses Beispiel enthält eine Liste von Links. Wenn ein Link angeklickt wird, ändert sich sein Inhalt, und diese Änderung wird über einen element-gebundenen View-Übergang animiert. Das Beispiel enthält auch ein Element, das das übergehende Element leicht überlappt; wir verwenden dies, um zu zeigen, wie `z-index`-Probleme vermieden werden können.

### HTML

Das Markup enthält eine {{htmlelement("ul")}}-Liste von Links zwischen zwei {{htmlelement("p")}}-Elementen mit Textinhalt.

```html live-sample___basic-element-scoped
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
</p>

<ul>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
  <li><a href="#">Standard</a></li>
</ul>

<p>
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

### CSS

Wir beginnen damit, dem `<ul>` einen Hintergrund und {{cssxref("border")}}-Stile zu geben. Außerdem erhält es eine {{cssxref("position")}} von `relative`, damit wir Nachfahren relativ zum `<ul>` absolut positionieren können.

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

Als nächstes geben wir den {{htmlelement("a")}}-Elementen eigene `border`-Stile und wenden eine {{cssxref("transition")}} an, sodass `border`-Stiländerungen bei Zustandsänderungen sanft animiert werden. Bei {{cssxref(":hover")}} und {{cssxref(":focus")}} ändern wir die Link-{{cssxref("border-color")}} in `schwarz`.

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

Das relevanteste CSS für View-Übergänge definiert benutzerdefinierte `animation`-Einstellungen für die [old](/de/docs/Web/CSS/Reference/Selectors/::view-transition-old) und [new](/de/docs/Web/CSS/Reference/Selectors/::view-transition-new) Übergangszustände, die den alten DOM-Zustand heraus- und den neuen hereindrehen. Beachten Sie, dass wir für die `rotate-in`-Animation (der zweite `0.3s`-Wert) einen {{cssxref("animation-delay")}}-Wert angewendet haben, um sicherzustellen, dass sie nur dann startet, wenn die `rotate-out`-Animation endet.

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

Abschließend erzeugen wir etwas generierten Inhalt auf dem `<ul>`-Element mithilfe des {{cssxref("::before")}}-Pseudoelements und positionieren ihn über dem `<ul>`-Element. Der generierte Inhalt enthält einen transparenten Farbeffekt.

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

Im Skript greifen wir auf das `<ul>`-Element zu und fügen ihm einen `click`-Event-Listener hinzu. Wenn darauf geklickt wird, überprüfen wir, ob das Ereignisziel ein `<a>`-Element ist. Falls ja, rufen wir [`startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) auf dem angeklickten `<a>`-Element auf, und toggeln dessen Inhalt zwischen "Standard" und "Alternative" über die `toggleText()`-Funktion.

Beachten Sie, dass wir auch eine Feature-Erkennung eingebaut haben, um sicherzustellen, dass der Code in Browsern funktioniert, die `startViewTransition()` nicht unterstützen: Bevor `startViewTransition()` ausgeführt wird, überprüfen wir, ob es auf dem Zielelement existiert. Wenn nicht, führen wir einfach die `toggleText()`-Funktion aus und `return`, sodass das DOM immer noch aktualisiert wird, aber ohne die Übergangsanimation.

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

### Resultat

{{embedlivesample("basic-element-scoped", "100%", "520")}}

Klicken/Aktivieren Sie die Links, um den View-Übergang bei jedem zu sehen.

Jedes `<a>`-Element hat seinen eigenen View-Übergang, der nur auf dieses Element begrenzt ist. Der Rest der Seite bleibt interaktiv, während ein View-Übergang im Gange ist, sodass Sie mehrere View-Übergänge gleichzeitig ausführen können. Darüber hinaus bleiben die übergehenden Elemente unter dem überlappenden generierten Inhalt, der darüber positioniert ist.

## Unterschiede zwischen element- und dokumentbezogenen Übergängen

Das vorherige Beispiel zeigt, wie element-gebundene View-Übergänge einige der Probleme ihrer dokumentgebundenen Gegenstücke lösen. Dies ist größtenteils auf die Unterschiede in der Platzierung des Pseudoelement-Baums zurückzuführen. Anstatt innerhalb des {{cssxref(":root")}}-Elements hinzugefügt zu werden, fügt der Browser element-gebundene View-Übergangsbäume in das Element ein, auf dem `Element.startViewTransition()` aufgerufen wird.

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

Dies bedeutet, dass der Übergang auf das `<a>`-Element (als "Übergangswurzel" oder "Geltungsbereich" bezeichnet) und dessen DOM-Inhalt beschränkt ist, sodass er andere Elemente oder laufende View-Übergänge nicht beeinträchtigt. Wenn der View-Übergang beginnt, sucht der Browser nur innerhalb dieses Geltungsbereichs nach Elementen, die aufgenommen werden sollen. Während des Aufnahmeprozesses – bis das Versprechen [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt wird – wird das Rendering nur innerhalb des Geltungsbereichs pausiert.

Das `::view-transition` Pseudoelement hat die gleiche Größe und Form wie das Übergangswurzel-Element und wird nur darüber gerendert, nicht über den Rest der Seite. Daher wird die Ebenenanordnung von Elementen außerhalb der Übergangswurzel respektiert.

## Selbstteilnehmende Geltungsbereiche und Clipping

Eine weitere wichtige Eigenschaft von element-gebundenen View-Übergängen ist, dass, wenn das übergangene Element von seinem Container abgeschnitten wird (zum Beispiel durch `overflow: scroll`), das Element während der Übergangsanimation abgeschnitten bleibt.

Das geschieht, weil Folgendes automatisch auf dem Geltungsbereichs-Root-Element festgelegt ist:

- Ein {{cssxref("view-transition-name")}}-Wert von `root`, der sicherstellt, dass das Root-Element an seinem eigenen Übergang teilnimmt (als Selbstteilnahme bezeichnet).
- Ein `view-transition-group`-Wert von `contain`, der [verschachtelte View-Übergangsgruppen](https://developer.chrome.com/docs/css-ui/view-transitions/nested-view-transition-groups) für den Geltungsbereich ermöglicht. Ein {{cssxref("overflow")}}-Wert von `clip` wird dann auf dem resultierenden {{cssxref("::view-transition-group()")}} Pseudoelement festgelegt, wodurch die Inhalte des Pseudoelement-Baums auf den Geltungsbereich beschnitten werden.
- Ein {{cssxref("view-transition-scope")}}-Wert von `all`, der sicherstellt, dass {{cssxref("view-transition-name")}}-Werte auf den Teilbaum des Elements beschränkt sind (siehe [Verschachtelte element-gebundene View-Übergänge](#verschachtelte_element-gebundene_view-übergänge) für weitere Details).

> [!NOTE]
> Sie können einen View-Übergang von der Selbstteilnahme ausschließen, indem Sie `view-transition-name: none` auf dem Übergangswurzel-Element festlegen. Dies kann jedoch zu unerwünschtem Verhalten führen, wie z.B. das Auslaufen des Übergangs aus dem Root bei Clipping-Fällen. Wenn Sie sich dafür entscheiden, testen Sie sorgfältig und stellen Sie sicher, dass der Geltungsbereich seine Inhalte nicht abschneidet.

Betrachten wir ein weiteres Beispiel, diesmal um das Clipping-Verhalten zu demonstrieren.

### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass das zentrale Element nun ein {{htmlelement("section")}} ist, das einen Absatz Text enthält. Wir fügen auch einen {{htmlelement("button")}} hinzu, den man drücken kann, um den Absatzinhalt zu ändern.

```html live-sample___element-scoped-clipping
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
</p>

<section>
  <p>
    Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec
    et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae
    augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec
    ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit
    amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis
    felis, pulvinar a semper sed, adipiscing id dolor.
  </p>
</section>
<button>Change!</button>

<p>
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

### CSS

Zunächst legen wir eine feste `height` und `overflow-y: scroll` auf das `<section>` fest, um den `<p>`-Inhalt vertikal scrollen zu lassen.

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

Als nächstes setzen wir einen {{cssxref("view-transition-name")}} auf das verschachtelte `<p>`-Element, mit übereinstimmenden Namen in den benutzerdefinierten {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelementen. Das bedeutet, dass nur `<p>` animiert wird, nicht der Rest des Übergangsgeltungsbereichs.

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

Aus Gründen der Kürze ist der {{cssxref("@keyframes")}}-Definitionscode ausgeblendet. Er ist nahezu identisch mit dem [vorherigen Beispiel](#css:~:text=%40keyframes%20rotate%2Dout); der einzige Unterschied besteht darin, dass die Rotation in diesem Beispiel um die y-Achse statt um die x-Achse erfolgt.

### JavaScript

Das Skript definiert ein `content`-Array, das zwei verschiedene Strings enthält, um den `<p>`-Inhalt auszutauschen. Dann greifen wir auf die `<section>`, `<p>` und `<button>`-Elemente zu.

```js hidden live-sample___element-scoped-clipping
const content = [
  "Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.",
  "Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum.",
];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

```js
const content = ["Maecenas congue ligula ...", "Nam vulputate diam ..."];

const section = document.querySelector("section");
const para = document.querySelector("section p");
const btn = document.querySelector("button");
```

Anschließend fügen wir dem `<button>` einen `click`-Event-Listener hinzu. Jedes Mal, wenn der Button geklickt wird, wird ein View-Übergang ausgelöst: Innerhalb des `startViewTransition()`-Aufrufs wird der `textContent` des `<p>`-Elements zwischen den beiden `content`-Array-Elementen über die `toggleText()`-Funktion umgeschaltet. Wir haben auch einfache Funktionserkennung eingebaut, die auf das direkte Ausführen von `toggleText()` in Browsern zurückfällt, die `Element.startViewTransition()` nicht unterstützen.

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

### Resultat

{{embedlivesample("element-scoped-clipping", "100%", "520")}}

Klicken Sie auf die Schaltfläche und beachten Sie, wie der Übergang nicht außerhalb des `<section>` herausragt – er bleibt auf den Übergangsgeltungsbereich beschränkt.

## Verschachtelte element-gebundene View-Übergänge

Ein weiterer bemerkenswerter Aspekt von element-gebundenen View-Übergängen ist, dass Sie View-Übergänge verschachteln und gleichzeitig ausführen können, ohne dass sie sich gegenseitig stören. Dies ist möglich, da der Browser, wie bereits erwähnt, automatisch einen {{cssxref("view-transition-scope")}}-Wert von `all` auf die Geltungsbereichs-Root-Elemente anwendet. Dies stellt sicher, dass {{cssxref("view-transition-name")}}-Werte auf den Teilbaum des Elements beschränkt sind und verhindert, dass Elemente und deren Inhalte von einem äußeren, gleichzeitigen View-Übergang erfasst werden. Browser ignorieren Elemente, bei denen `view-transition-scope: all` gesetzt ist, während des Aufnahmeprozesses.

Werfen wir einen Blick auf eine Demonstration verschachtelter element-gebundener View-Übergänge.

Das HTML ist dasselbe wie im [ersten Beispiel](#einfaches_element-gebundenes_beispiel), außer dass es jetzt zwei Listen von Links in einem zusätzlichen Wrapper-Element gibt.

```html hidden live-sample___element-scoped-nested
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus.
  Set sit amet ipsum mauris.
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
  Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et
  mollis dolor.
</p>
```

### CSS

Die zwei Listen werden nebeneinander im `.wrapper`-Element mit [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) angeordnet. Wir geben dem Wrapper eine `view-transition-name` von `wrapper`, und dann geben wir jeder Liste eine andere Hintergrundfarbe:

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

Wir wenden auch verschiedene Animationen auf die allgemeinen alten und neuen Übergangs-Pseudoelemente an und dann separate Animationen auf die alten und neuen Übergangs-Pseudoelemente des `wrapper`:

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

Der Rest des CSS ist aus Gründen der Kürze ausgeblendet.

### JavaScript

Das JavaScript ist ähnlich wie im ersten Beispiel, außer dass hier zwei element-gebundene View-Übergänge gleichzeitig ausgeführt werden, jedes Mal, wenn ein Link geklickt wird. Der erste toggelt den Text des Links zwischen "Standard" und "Alternative" (über die `toggleText()`-Funktion), und der zweite tauscht die Position der beiden Listen im DOM (über die `togglePosition()`-Funktion). Wie zuvor haben wir Code zur Funktionserkennung eingebaut, sodass das Beispiel auch in Browsern funktioniert, die `Element.startViewTransition()` nicht unterstützen.

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

### Resultat

{{embedlivesample("element-scoped-nested", "100%", "520")}}

Klicken Sie den Text innerhalb eines Kastens an. Beachten Sie, wie das Text-Umstellen und der Listentausch gleichzeitig passieren – beide verschachtelten Übergänge laufen zur selben Zeit, ohne sich gegenseitig zu beeinträchtigen.

## Abfrage von aktiven View-Übergängen

Die folgenden Eigenschaften ermöglichen es Ihnen, aktive element-gebundene View-Übergänge abzufragen:

- [`ViewTransition.transitionRoot`](/de/docs/Web/API/ViewTransition/transitionRoot): Gibt einen Verweis auf das Root-Element des Geltungsbereichs des View-Übergangs zurück.
- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition): Gibt einen Verweis auf einen aktiven `ViewTransition` eines Elements zurück, falls einer existiert.

Zum Beispiel, wenn Sie die auf ein Element aktiven Animationen während eines Übergangs auf irgendeine Weise verarbeiten möchten, können Sie darauf über `transitionRoot` zugreifen:

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
- [Führen Sie gleichzeitige und verschachtelte View-Übergänge mit element-gebundenen View-Übergängen aus](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) auf developer.chrome.com
