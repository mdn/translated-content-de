---
title: Verwenden von View-Transition-Typen
short-title: View transition types
slug: Web/API/View_Transition_API/Using_types
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

{{DefaultAPISidebar("View Transition API")}}

View-Transition-Typen bieten einen Mechanismus, mit dem verschiedene **Typen** für aktive View Transitions angegeben werden können. CSS kann dann verwendet werden, um unterschiedliche Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom angegebenen Transition-Typ. Beispielsweise möchten Sie möglicherweise unterschiedliche Animationen auf ein {{htmlelement("img")}}-Element in einer Bildergalerie-App anwenden, wenn sich das angezeigte Bild ändert – je nachdem, ob Sie in der Sequenz vorwärts oder rückwärts navigieren, ein Bild löschen oder ein Bild zur Sequenz hinzufügen.

Dieser Artikel zeigt, wie Typen zusammen mit Same-Document-View-Transitions und Cross-Document-View-Transitions verwendet werden.

## Beispiele

Wir demonstrieren anhand des Codes in den folgenden drei Beispielen, was Sie über View-Transition-Typen wissen müssen:

- [SPA-Galerie mit Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): Eine SPA-Bildergalerie, die Transition-Typen verwendet, um unterschiedliche Transition-Animationen anzuwenden, wenn zwischen den Bildern über die Schaltfläche „Previous“, die Schaltfläche „Next“ oder durch direktes Klicken auf ein Bild gewechselt wird.
- [MPA-Beispiel für Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): Eine Story-App mit einem Kapitel auf jeder Seite. Zeigt, wie View-Transition-Animationen mit einem Transition-Typ selektiv über Seiten hinweg angewendet werden.
- [MPA-Beispiel für mehrere Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): Baut auf dem vorherigen Beispiel auf und zeigt, wie unterschiedliche View-Transition-Animationen mit verschiedenen Transition-Typen selektiv über Seiten hinweg angewendet werden. Der Transition-Typ wird während der Navigation dynamisch mit JavaScript bestimmt.

Wir erklären nicht die Funktionsweise des gesamten Codes, sondern nur die für View-Transition-Typen relevanten Teile. Wir haben Kommentare im Code bereitgestellt, die erklären, was jeder Teil tut.

## Verwenden von Typen mit SPA-View-Transitions

Um unterschiedliche Typen auf SPA-View-Transitions anzuwenden, übergeben wir die Typnamen an den Aufruf der Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), die die Transition startet. Die Methode kann als Parameter ein Objekt akzeptieren, das eine `update`-Callback-Funktion enthält, welche die DOM-Aktualisierungen verarbeitet, die Sie animieren möchten, sowie ein `types`-Array mit Zeichenketten, die die Typnamen darstellen.

Schauen wir uns ein Beispiel aus unserer [SPA-Galerie mit Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) an:

```js
document.startViewTransition({
  update() {
    displayedImage.src = `${baseURL}${images[newId].filename}`;
    displayedImage.alt = images[newId].alt;
    displayedImage.setAttribute("data-id", newId);
    caption.textContent = images[newId].alt;
  },
  types: ["backwards"],
});
```

Wenn die Schaltfläche „Previous“ gedrückt wird, wird dieser Code ausgeführt – die Callback-Funktion aktualisiert das angezeigte Bild, sodass das vorherige Bild in der Sequenz angezeigt wird (einschließlich der Aktualisierung seines Alternativtexts, von `data-id`, das die Sequenznummer darstellt, sowie der Beschriftung), und das `types`-Array gibt an, dass die View Transition mit dem Typ `backwards` ausgeführt werden soll.

> [!NOTE]
> Die im `types`-Array für die View Transition festgelegten Typen können über die Eigenschaft [`types`](/de/docs/Web/API/ViewTransition/types) des Objekts [`ViewTransition`](/de/docs/Web/API/ViewTransition) aufgerufen werden, das von der Methode `startViewTransition()` zurückgegeben wird. Die Eigenschaft `types` ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dabei handelt es sich um ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die auf eine View Transition angewendeten Typen dynamisch mit den darauf verfügbaren Methoden wie `clear()`, `add()` und `delete()` ändern können.

### Anwenden benutzerdefinierter Animationen in CSS

In CSS können wir die Stile für die aktive Transition mithilfe der Pseudoklassen {{cssxref(":active-view-transition")}} und {{cssxref(":active-view-transition-type()")}} anpassen. Diese ermöglichen es Ihnen jeweils, Selektoren zu erstellen, die übereinstimmen, wenn eine beliebige View Transition aktiv ist, oder nur dann, wenn eine View Transition mit einem bestimmten Typ aktiv ist.

Zunächst definieren wir eine Reihe von Stilen, die angewendet werden, wenn eine View Transition aktiv ist, unabhängig von ihrem Typ, ausgewählt mit `:active-view-transition`. In diesem verschachtelten Block wenden wir einen {{cssxref("view-transition-name")}}-Wert von `none` auf das Dokument-{{cssxref(":root")}} an, um View Transitions für den größten Teil des Dokuments zu deaktivieren. Anschließend wenden wir `view-transition-name`-Werte von `image` beziehungsweise `caption` auf die Elemente {{htmlelement("img")}} und {{htmlelement("figcaption")}} an, sodass Änderungen ihres DOM-Zustands in separaten Snapshots erfasst werden und sie unabhängig animiert werden können.

Schließlich verwenden wir die Pseudoelemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um spezifische Animationen auf die ausgehende und eingehende Ansicht von `caption` anzuwenden. Diese Animationen sollen unabhängig vom angegebenen Typ auf `<figcaption>` angewendet werden.

```css
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  .displayed-img {
    view-transition-name: image;
  }
  figcaption {
    view-transition-name: caption;
  }

  &::view-transition-old(caption) {
    animation-name: fade-out;
  }
  &::view-transition-new(caption) {
    animation-name: fade-in;
    animation-delay: 0.6s;
  }
}
```

Im nächsten Schritt werden unterschiedliche Animationen auf die ausgehenden und eingehenden Ansichten von `image` angewendet, abhängig davon, ob der `type` der aktiven View Transition `forwards` ist (die Schaltfläche „Next“ wurde gedrückt), `backwards` (die Schaltfläche „Previous“ wurde gedrückt) oder `upwards` (auf ein Vorschaubild wurde geklickt). Dies geschieht mithilfe von drei `:active-view-transition-type()`-Regelsätzen, die jeweils unterschiedliche {{cssxref("animation-name")}}-Werte auf die Pseudoelemente `::view-transition-old()` und `::view-transition-new()` für jeden einzelnen Typ anwenden:

```css
html:active-view-transition-type(forwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-left;
  }
}

html:active-view-transition-type(upwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-top;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-top;
    animation-delay: 0.6s;
  }
}
```

Im Fall der Animation `::view-transition-new(image)` für den Typ `upwards` haben wir außerdem einen {{cssxref("animation-delay")}}-Wert von `0.6s` hinzugefügt, um zu verhindern, dass der neue Inhalt vom oberen Bildschirmrand hereingleitet, bevor der alte Inhalt vollständig herausgeglitten ist. Wenn sich beide in diesem Fall überlappen, sieht es seltsam aus.

Weiter unten im Stylesheet setzen wir die {{cssxref("animation-duration")}} aller Animationen in allen Gruppen auf `0.6s`, was erklärt, warum der zuvor festgelegte Verzögerungswert `0.6s` betrug:

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> Der Kürze halber haben wir nicht den gesamten {{cssxref("@keyframes")}}-Definitionscode für die oben referenzierten Animationen gezeigt. Sie finden ihn im [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types).

## Verwenden von Typen mit Cross-Document-View-Transitions über `@view-transition`

Um unterschiedliche Typen auf Cross-Document-View-Transitions anzuwenden, können Sie sie im Deskriptor [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types) der At-Regel {{cssxref("@view-transition")}} festlegen, die einen oder mehrere durch Kommas getrennte Typen enthält.

Beispielsweise sieht die At-Regel `@view-transition` im gemeinsamen Stylesheet unseres [MPA-Beispiels für Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) folgendermaßen aus:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

In CSS können wir die auf die aktive View Transition angewendeten Animationen abhängig von ihrem Typ auf dieselbe Weise anpassen wie im SPA-Beispiel:

```css
html:active-view-transition-type(slide) {
  :root {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}
```

Hier wenden wir mehrere Stile an, wenn die aktive View Transition mithilfe des Selektors `:active-view-transition-type(slide)` den `type` `slide` hat. Wir wenden einen `view-transition-name` von `none` auf das Element `:root` an, um jegliche Snapshot-Erfassung zu verhindern, und überschreiben diesen anschließend durch einen `view-transition-name` von `chapter`, der auf dem `<section>`-Element der Seite festgelegt ist – dies ist der einzige Teil der Dokumente, auf den wir eine View Transition anwenden möchten.

Anschließend verwenden wir `::view-transition-old(chapter)` und `::view-transition-new(chapter)`, um benutzerdefinierte Animationen auf `<section>` anzuwenden, während sein Inhalt zwischen Seiten wechselt.

## Anwenden unterschiedlicher Cross-Document-Typen mit den Ereignissen `pageswap` und `pagereveal`

Das Obige funktioniert zwar, ist aber nicht ideal – wenn zu einer neuen Seite navigiert wird, verschwindet der Inhalt der alten Seite immer nach links und der Inhalt der neuen Seite erscheint immer von rechts. Diese Animation eignet sich gut, wenn Sie zu einem späteren Kapitel wechseln, fühlt sich jedoch (zumindest für Nutzende links-nach-rechts geschriebener Sprachen wie Englisch) beim Wechsel zu einem früheren Kapitel kontraintuitiv an. Bei Bewegungen von einem späteren zu einem früheren Kapitel wäre es besser, die Animationsrichtung umzukehren.

Um unterschiedliche Typen auf die aktive View Transition basierend auf verschiedenen Navigationstypen anzuwenden, müssen wir die Eigenschaft [`types`](/de/docs/Web/API/ViewTransition/types) des entsprechenden `ViewTransition`-Objekts bearbeiten. Diese ist verfügbar in der:

- Ereignisobjekteigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) des Ereignisses [`pageswap`](/de/docs/Web/API/Window/pageswap_event) im Fall der ausgehenden Seite.
- Ereignisobjekteigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) des Ereignisses [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) im Fall der eingehenden Seite.

Das [MPA-Beispiel für mehrere Transition-Typen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) zeigt, wie diese Technik verwendet wird. Es ähnelt dem vorherigen Beispiel, weist jedoch einige bemerkenswerte Unterschiede auf, die wir nachfolgend erläutern.

### Bestimmen des Animationstyps mit JavaScript

Schauen wir uns die gemeinsame JavaScript-Datei an. Zunächst definieren wir eine benutzerdefinierte Funktion, `determineTransitionType()`, die die URL der ausgehenden Seite und der eingehenden Seite betrachtet und daraus bestimmt, ob der Navigationstyp `backwards` (Wechsel zu einem früheren Kapitel) oder `forwards` (Wechsel zu einem späteren Kapitel) lautet.

Die Kapitelseiten sind fortlaufend benannt (`index.html`, dann `index2.html`, `index3.html` usw.). Daher vergleichen wir die in den Dateinamen enthaltene Zahl, um festzustellen, ob die Navigation `backwards` ist (die Nummer der ausgehenden Seite ist höher als die Nummer der eingehenden Seite) oder vorwärts erfolgt (die Nummer der ausgehenden Seite ist niedriger als die Nummer der eingehenden Seite).

Der Code, den Sie zur Bestimmung des anzuwendenden Typs verwenden, hängt von Ihrem Projekt ab. Ausführliche Kommentare, die erklären, wie der folgende Code funktioniert, finden Sie in unserem [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types).

```js
const determineTransitionType = (oldNavigationEntry, newNavigationEntry) => {
  const currentURL = oldNavigationEntry.url;
  const destinationURL = newNavigationEntry.url;

  function determinePageIndex(url) {
    const array = url.split("/");
    const slug = array[array.length - 1];
    if (slug.indexOf("html") === -1) {
      return 0;
    }
    const pageIndex = slug.replace("index", "").replace(".html", "");
    if (pageIndex === "") {
      return 0;
    }
    return parseInt(pageIndex, 10);
  }

  const currentPageIndex = determinePageIndex(currentURL);
  const destinationPageIndex = determinePageIndex(destinationURL);

  if (currentPageIndex > destinationPageIndex) {
    return "backwards";
  } else if (currentPageIndex < destinationPageIndex) {
    return "forwards";
  }
};
```

Als Nächstes verwenden wir einen Event-Listener für [`pageswap`](/de/docs/Web/API/Window/pageswap_event), um den Transition-Typ für die ausgehende Seite festzulegen. Innerhalb der Event-Handler-Funktion rufen wir die alten und neuen Navigationseinträge aus der Eigenschaft [`activation`](/de/docs/Web/API/PageSwapEvent/activation) des Ereignisobjekts ab, übergeben diese an die Funktion `determineTransitionType()`, um den Typ zu bestimmen, und weisen dann den Typ mithilfe der Methode `add()` der Eigenschaft [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) der View Transition zu.

```js
window.addEventListener("pageswap", async (e) => {
  const transitionType = determineTransitionType(
    e.activation.from,
    e.activation.entry,
  );

  console.log(`pageSwap: ${transitionType}`);
  e.viewTransition.types.add(transitionType);
});
```

Schließlich verwenden wir einen Event-Listener für [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event), um den Transition-Typ für die eingehende Seite festzulegen. Innerhalb der Event-Handler-Funktion rufen wir die alten und neuen Navigationseinträge aus der Eigenschaft [`Navigation.activation`](/de/docs/Web/API/Navigation/activation) ab und übergeben diese an die Funktion `determineTransitionType()`, um den Typ zu bestimmen. Wir weisen den Typ mithilfe der Methode `add()` der Eigenschaft [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types) der View Transition zu, es sei denn, der Typ ist `undefined`; in diesem Fall überspringen wir diesen Schritt.

```js
window.addEventListener("pagereveal", async (e) => {
  const transitionType = determineTransitionType(
    navigation.activation.from,
    navigation.activation.entry,
  );

  console.log(`pageReveal: ${transitionType}`);
  if (transitionType !== undefined) {
    e.viewTransition.types.add(transitionType);
  }
});
```

> [!NOTE]
> Die Funktion `determineTransitionType()` kann `undefined` zurückgeben, wenn weder die Bedingung `backwards` noch `forwards` wahr ist. Dies kann auftreten, wenn die Nutzenden die Seite neu laden. In diesem Fall sind die aktuelle Seite und die Zielseite dieselbe Seite, weshalb die Indexwerte gleich sind.

### Anwenden benutzerdefinierter Animationen in CSS

Nachdem wir nun abhängig vom Navigationstyp einen passenden Typ für die aktive View Transition festgelegt haben, können wir für jeden Typ in unserem CSS unterschiedliche Animationen festlegen, wie wir es in den vorherigen Beispielen gesehen haben:

```css
html:active-view-transition {
  nav {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
}

html:active-view-transition-type(forwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-left;
  }
}
```

Beachten Sie außerdem, dass wir den Deskriptor `types` aus der At-Regel `@view-transition` im gemeinsamen CSS entfernt haben. Wir benötigen den Deskriptor `navigation`, um Cross-Document-View-Transitions zu aktivieren, aber wir behandeln Typen in unserem JavaScript, daher müssen wir sie hier nicht festlegen.

```css
@view-transition {
  navigation: auto;
}
```

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Mehrere View-Transition-Stile mit View-Transition-Typen verarbeiten (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) auf developer.chrome.com (2024)
- [View-Transition-Typen in Cross-Document-View-Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) auf developer.chrome.com (2024)
