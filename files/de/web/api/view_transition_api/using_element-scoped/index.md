---
title: Verwendung von elementbasierten View-Transitions
short-title: Elementbasierte View-Transitions
slug: Web/API/View_Transition_API/Using_element-scoped
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{DefaultAPISidebar("View Transition API")}}

Elementbasierte View-Transitions sind auf den DOM-Teilbaum eines bestimmten Elements beschränkt. Sie haben viele Vorteile gegenüber dokumentbasierten View-Transitions: Sie können Transitions auf Unterabschnitten des Dokuments ausführen, während der Rest des Dokuments interaktiv bleibt, mehrere Transitions gleichzeitig ausführen — einschließlich verschachtelter Transitions — und mehrere andere Probleme lösen.

Dieser Artikel behandelt, wie elementbasierte View-Transitions funktionieren und wie man sie verwendet.

> [!NOTE]
> "Dokumentbasierte View-Transitions" beziehen sich auf transitions innerhalb desselben Dokuments, d.h. transitions, die über die Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) initiiert werden.
>
> Elementbasierte View-Transitions werden über dieselbe Methode initiiert, die auf ein einzelnes Element aufgerufen wird (siehe [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition)). Elementbasierte View-Transitions sind für transitions über mehrere Dokumente hinweg nicht verfügbar.

## Probleme mit dokumentbasierten View-Transitions

Dokumentbasierte View-Transitions sind nützlich, um DOM-Inhaltsaktualisierungen über ein ganzes Dokument hinweg zu animieren. Sie können [verschiedene Animationen auf verschiedene Teile der Seite anwenden](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements), eine einzelne Übergangsanimation auf die gesamte Seite oder gar keine Animationen.

Sie können auch verschiedene [View-Transition-Typen](/de/docs/Web/API/View_Transition_API/Using_types) verwenden, um unterschiedliche Animationen auf dasselbe Element je nach Situation anzuwenden - zum Beispiel, ob es das nächste oder vorherige Element in einer Sequenz ist.

Dokumentbasierte View-Transitions haben jedoch mehrere Nachteile:

- Sie können nicht mehr als eine View-Transition gleichzeitig ausführen.
- Wenn eine View-Transition ausgeführt wird, ist die Seite nicht interaktiv, bis die Transition abgeschlossen ist.
- Der [Pseudoelement-Baum](/de/docs/Web/API/View_Transition_API/Using#different_animations_for_different_elements), der mit einer dokumentbasierten View-Transition verbunden ist, liegt über allem anderen auf der Seite. Wenn ein anderes Element über dem aktualisierten Teil der Seite positioniert ist, wenn die Übergangsanimation beginnt (beispielsweise unter Verwendung von {{cssxref("z-index")}}), wird das positionierte Element während der Dauer der Animation darunter verschwinden, was wahrscheinlich nicht der gewünschte Effekt ist.
- Im Zusammenhang mit dem vorherigen Problem, wenn der aktualisierte Teil der Seite von einem übergeordneten Wrapper unter Verwendung von {{cssxref("overflow")}} abgeschnitten wird, wird er aus dem Container herausragen, wenn die Animation beginnt.

Elementbasierte View-Transitions können diese Probleme lösen. Lassen Sie uns einige Beispiele betrachten, um zu sehen, wie.

## Einfaches elementbasiertes Beispiel

Dieses Beispiel enthält eine Liste von Links. Wenn ein Link angeklickt wird, ändert sich dessen Inhalt und diese Änderung wird über eine elementbasierte View-Transition animiert. Das Beispiel enthält auch ein Element, das leicht überlappt mit dem sich ändernden Element; wir verwenden dieses, um zu zeigen, wie `z-index`-Probleme vermieden werden können.

### HTML

Das Markup enthält eine {{htmlelement("ul")}}-Liste von Links zwischen zwei {{htmlelement("p")}}-Elementen, die Textinhalt enthalten.

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

Wir beginnen damit, dem `<ul>` einen Hintergrund und {{cssxref("border")}}-Styling zu geben. Wir geben ihm auch eine {{cssxref("position")}} von `relative`, damit wir Nachfahren relativ zum `<ul>` absolut positionieren können.

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
  border: 2px solid #999999;
  background: #cccccc;
  position: relative;
}
```

Als nächstes geben wir den {{htmlelement("a")}}-Elementen ihre eigenen `border`-Stile und wenden eine {{cssxref("transition")}} an, sodass `border`-Stilaktualisierungen bei Zustandsänderungen fließend animiert werden. Bei {{cssxref(":hover")}} und {{cssxref(":focus")}} ändern wir die {{cssxref("border-color")}} des Links zu `black`.

```css live-sample___basic-element-scoped
a {
  border: 2px solid #aaaaaa;
  transition: border 0.6s;
}

a:hover,
a:focus {
  border-color: black;
}
```

Der relevanteste CSS für View-Transitions definiert benutzerdefinierte `animation`-Einstellungen für die alten und neuen Übergangszustände, die den alten DOM-Zustand heraus und den neuen DOM-Zustand hinein rotieren. Beachten Sie, dass wir einen {{cssxref("animation-delay")}}-Wert auf die `rotate-in`-Animation angewendet haben (den zweiten `0.3s`-Wert), um sicherzustellen, dass sie erst beginnt, wenn die `rotate-out`-Animation endet.

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

Abschließend erstellen wir auf dem `<ul>`-Element mit dem {{cssxref("::before")}}-Pseudoelement generierten Inhalt und positionieren ihn über dem `<ul>`-Element. Der generierte Inhalt enthält einen transparenten Verlaufseffekt.

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
    white,
    white 25%,
    rgb(255 255 255 / 0)
  );
  z-index: 1;
}
```

### JavaScript

Im Skript holen wir uns eine Referenz zum `<ul>`-Element und fügen einen `click`-Ereignislistener hinzu. Wenn darauf geklickt wird, prüfen wir, dass das Ereignisziel ein `<a>`-Element ist. Falls ja, rufen wir [`startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) auf dem angeklickten `<a>`-Element auf und schalten seinen Inhalt über die Funktion `toggleText()` zwischen "Standard" und "Alternative" um.

Beachten Sie, dass wir auch eine Merkmalserkennung hinzugefügt haben, um sicherzustellen, dass der Code in Browsern funktioniert, die `startViewTransition()` nicht unterstützen: Bevor `startViewTransition()` ausgeführt wird, prüfen wir, ob es auf dem Zielelement existiert. Ist dies nicht der Fall, führen wir einfach die Funktion `toggleText()` aus und `return`, sodass das DOM dennoch aktualisiert wird, aber ohne die Übergangsanimation.

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

Klicken/Aktivieren Sie die Links, um die View-Transition auf jedem zu sehen.

Jedes `<a>`-Element hat seine eigene View-Transition, die nur auf dieses Element beschränkt ist. Der Rest der Seite bleibt interaktiv, während eine View-Transition im Gange ist, sodass Sie mehrere View-Transitions gleichzeitig ausführen können. Darüber hinaus bleiben die sich ändernden Elemente unter dem überlappenden generierten Inhalt, der über ihnen positioniert ist.

## Unterschiede zwischen element- und dokumentbasierten Transitions

Das vorherige Beispiel zeigt, wie elementbasierte View-Transitions einige der Probleme ihrer dokumentbasierten Gegenstücke beheben. Dies ist hauptsächlich dank der unterschiedlichen Platzierung des Pseudoelement-Baums möglich. Anstatt innerhalb des {{cssxref(":root")}}-Elements hinzugefügt zu werden, fügt der Browser elementbasierte View-Transition-Bäume innerhalb des Elements hinzu, auf dem `Element.startViewTransition()` aufgerufen wird.

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

Das bedeutet, dass die Transition auf das `<a>`-Element (das als "Übergangs-Root" oder "Scope" bezeichnet wird) und dessen DOM-Inhalt beschränkt ist, sodass sie andere Elemente oder laufende View-Transitions nicht beeinflusst. Wenn die View-Transition beginnt, sucht der Browser nur innerhalb dieses Bereichs nach Elementen, die er erfassen soll. Während des Aufnahmeprozesses — bis das Versprechen [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt wird — wird das Rendering nur innerhalb des Bereichs pausiert.

Das `::view-transition`-Pseudoelement hat die gleiche Größe und Form wie das Übergangs-Root-Element und wird nur darüber gerendert, nicht über den Rest der Seite. Aus diesem Grund wird die Schichtung von Elementen außerhalb des Übergangs-Root beachtet.

## Selbstbeteiligende Scopes und Clipping

Ein weiteres wichtiges Merkmal von elementbasierten View-Transitions ist, dass, wenn das Übergangselement von seinem Container abgeschnitten wird (z.B. durch `overflow: scroll`), das Element während der Übergangsanimation abgeschnitten bleibt.

Dies geschieht, weil die folgenden Werte automatisch auf das Scope-Root-Element gesetzt werden:

- Ein {{cssxref("view-transition-name")}}-Wert von `root`, der sicherstellt, dass das Root-Element an seiner eigenen Transition teilnimmt (als Selbstbeteiligung bezeichnet).
- Ein `view-transition-group`-Wert von `contain`, der [verschachtelte View-Transition-Gruppen](https://developer.chrome.com/docs/css-ui/view-transitions/nested-view-transition-groups) für den Scope ermöglicht. Ein {{cssxref("overflow")}}-Wert von `clip` wird dann auf das resultierende {{cssxref("::view-transition-group()")}}-Pseudoelement gesetzt, was dazu führt, dass die Inhalte des Pseudoelement-Baums auf den Scope abgeschnitten werden.
- Ein {{cssxref("view-transition-scope")}}-Wert von `all`, der sicherstellt, dass {{cssxref("view-transition-name")}}-Werte auf den Unterbaum des Elements beschränkt werden (siehe [Verschachtelte elementbasierte View-Transitions](#verschachtelte_elementbasierte_view-transitions) für weitere Details).

> [!NOTE]
> Sie können eine View-Transition aus der Selbstbeteiligung herausnehmen, indem Sie `view-transition-name: none` auf dem Übergangs-Root-Element setzen. Dies kann jedoch zu unerwünschtem Verhalten führen, wie das Herausragen der Transition über das Root in Clipping-Fällen. Wenn Sie sich dazu entscheiden, testen Sie sorgfältig und stellen Sie sicher, dass der Scope seine Inhalte nicht abschneidet.

Betrachten wir ein weiteres Beispiel, diesmal um das Clipping-Verhalten zu demonstrieren.

### HTML

Das HTML ist ähnlich wie im vorherigen Beispiel, außer dass das zentrale Element jetzt eine {{htmlelement("section")}} mit einem Absatz Text ist. Wir fügen auch einen {{htmlelement("button")}} hinzu, der gedrückt werden kann, um den Absatzinhalt zu ändern.

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

Zunächst setzen wir eine feste `height` und `overflow-y: scroll` auf die `<section>`, um den Inhalt des `<p>` vertikal scrollen zu lassen.

```css hidden live-sample___element-scoped-clipping
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section {
  border: 2px solid #999999;
  background: #dddddd;
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

Als nächstes setzen wir einen {{cssxref("view-transition-name")}} auf das verschachtelte `<p>`-Element, mit übereinstimmenden Namen in den benutzerdefinierten {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudoelementen. Das bedeutet, dass nur `<p>` animiert wird, nicht der Rest des Übergangsscope.

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

Aus Gründen der Kürze ist der {{cssxref("@keyframes")}}-Definitionscode versteckt. Er ist nahezu identisch mit dem [vorherigen Beispiel](#:~:text=%40keyframes%20rotate%2Dout); der einzige Unterschied besteht darin, dass die Rotation in diesem Beispiel um die y-Achse und nicht um die x-Achse erfolgt.

### JavaScript

Das Skript definiert ein `content`-Array mit zwei verschiedenen Strings, zwischen denen der `<p>`-Inhalt gewechselt werden soll. Wir greifen dann auf Referenzen zu den `<section>`, `<p>` und `<button>`-Elementen zu.

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

Anschließend fügen wir einen `click`-Ereignislistener zum `<button>` hinzu. Jedes Mal, wenn der Button geklickt wird, wird eine View-Transition ausgelöst: Innerhalb des `startViewTransition()`-Aufrufs wird der `textContent` des `<p>`-Elements zwischen den beiden `content`-Array-Elementen über die `toggleText()`-Funktion umgeschaltet. Wir haben auch eine einfache Merkmalserkennung hinzugefügt, die sich in Browsern, die `Element.startViewTransition()` nicht unterstützen, auf das direkte Ausführen von `toggleText()` zurückfällt.

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

Klicken Sie auf den Button und beachten Sie, wie die Transition nicht über die `<section>` hinausläuft — sie bleibt auf den Übergangsbereich beschränkt.

## Verschachtelte elementbasierte View-Transitions

Ein weiterer Aspekt von elementbasierten View-Transitions, der erwähnenswert ist, ist, dass Sie View-Transitions verschachteln und gleichzeitig ohne Beeinträchtigungen ausführen lassen können. Dies ist möglich, weil, wie bereits erwähnt, der Browser automatisch einen {{cssxref("view-transition-scope")}}-Wert von `all` auf die Scope-Root-Elemente zuweist. Dies stellt sicher, dass {{cssxref("view-transition-name")}}-Werte auf den Unterbaum des Elements beschränkt werden, und verhindert, dass Elemente und deren Inhalte von einem äußeren, gleichzeitig ablaufenden View-Transition erfasst werden. Browser ignorieren Elemente, die `view-transition-scope: all` gesetzt haben, während des Aufnahmeprozesses.

Sehen wir uns eine Demonstration von verschachtelten elementbasierten View-Transitions an.

Das HTML ist dasselbe wie beim [ersten Beispiel](#einfaches_elementbasiertes_beispiel), außer dass es jetzt zwei Listen von Links innerhalb eines zusätzlichen Wrapper-Elements gibt.

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

Die beiden Listen sind nebeneinander innerhalb des `.wrapper`-Elements mithilfe von [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) angeordnet. Wir geben dem Wrapper einen `view-transition-name` von `wrapper` und dann geben wir jeder Liste eine andere Hintergrundfarbe:

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
  border: 2px solid #999999;
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
  border: 2px solid #aaaaaa;
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

Wir wenden auch unterschiedliche Animationen auf die allgemeinen alten und neuen Übergangspseudoelemente an und dann separate Animationen auf die alten und neuen Übergangspseudoelemente des `wrapper`:

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

Wir haben den Rest des CSS für die Kürze versteckt.

### JavaScript

Das JavaScript ist ähnlich wie im ersten Beispiel, außer dass hier zwei elementbasierte View-Transitions gleichzeitig jedes Mal ausgeführt werden, wenn ein Link angeklickt wird. Die erste schaltet den Text des Links zwischen "Standard" und "Alternative" (über die `toggleText()`-Funktion) um, und die zweite wechselt die Position der beiden Listen im DOM (über die `togglePosition()`-Funktion). Wie zuvor haben wir Code zur Merkmalserkennung hinzugefügt, sodass das Beispiel auch in Browsern funktioniert, die `Element.startViewTransition()` nicht unterstützen.

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

Klicken Sie auf den Text in einem Kasten. Beachten Sie, wie das Umschalten des Textes und das Tauschen der Listen gleichzeitig erfolgen - beide verschachtelten Transitions laufen zur gleichen Zeit ohne gegenseitige Beeinträchtigung.

## Abfragen aktiver View-Transitions

Die folgenden Eigenschaften ermöglichen das Abfragen aktiver elementbasierter View-Transitions:

- [`ViewTransition.transitionRoot`](/de/docs/Web/API/ViewTransition/transitionRoot): Gibt eine Referenz zum Root-Element des View-Transition-Scope zurück.
- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition): Gibt eine Referenz auf eine aktive `ViewTransition` eines Elements zurück, falls eine existiert.

Zum Beispiel, wenn Sie die während einer Transition aktiven Animationen auf einem Element auf irgendeine Weise verarbeiten möchten, können Sie auf sie zugreifen, indem Sie `transitionRoot` verwenden:

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
- [Concurrent und verschachtelte View-Transitions mit elementbasierten View-Transitions ausführen](https://developer.chrome.com/docs/css-ui/view-transitions/element-scoped-view-transitions) auf developer.chrome.com
