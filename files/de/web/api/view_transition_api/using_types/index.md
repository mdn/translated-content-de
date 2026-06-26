---
title: Verwendung von View-Transition-Typen
short-title: Arten von View-Transitionen
slug: Web/API/View_Transition_API/Using_types
l10n:
  sourceCommit: 3114d1b72a4d46d314caa7f73f775a1f6f7407dc
---

{{DefaultAPISidebar("View Transition API")}}

View-Transition-Typen bieten eine Methode, mit der verschiedene **Arten** für aktive View-Transitionen spezifiziert werden können. CSS kann dann verwendet werden, um verschiedene Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig von dem speziellen Transition-Typ. Zum Beispiel könnten Sie unterschiedliche Animationen auf ein {{htmlelement("img")}}-Element in einer Bildergalerie-App anwenden, wenn das angezeigte Bild geändert wird, je nachdem, ob Sie vorwärts oder rückwärts in der Sequenz navigieren, ein Bild löschen oder ein Bild in die Sequenz einfügen.

Dieser Artikel zeigt, wie man Typen zusammen mit Same-Document-View-Transitionen und Cross-Document-View-Transitionen verwendet.

## Beispiele

Wir zeigen, was Sie über View-Transition-Typen wissen müssen, indem wir den Code in den folgenden drei Beispielen durchgehen:

- [SPA Transition Types Gallery](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): Eine SPA-Bildergalerie, die Transition-Typen verwendet, um verschiedene Übergangsanimationen anzuwenden, wenn zwischen den Bildern durch Verwendung der Vorher- und Nächster-Schaltflächen oder durch direktes Klicken auf ein Bild gewechselt wird.
- [MPA Transition Types Example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): Eine Story-App mit einem Kapitel auf jeder Seite. Zeigt, wie man View-Transition-Animationen über Seiten hinweg selektiv mit einem Transition-Typ anwenden kann.
- [MPA Multiple Transition Types Example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): Baut auf dem vorherigen Beispiel auf, indem gezeigt wird, wie man verschiedene View-Transition-Animationen selektiv über Seiten mit verschiedenen Transition-Typen anwenden kann. Der Transition-Typ wird während der Navigation dynamisch mit JavaScript bestimmt.

Wir werden nicht erklären, wie der gesamte Code funktioniert, sondern nur die Teile, die für View-Transition-Typen relevant sind. Wir haben Kommentare im Code bereitgestellt, um zu erklären, was jeder Teil tut.

## Verwendung von Typen mit SPA-View-Transitionen

Um unterschiedliche Typen für SPA-View-Transitionen anzuwenden, übergeben wir die Typnamen an den Aufruf der Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), die die Transition startet. Die Methode kann ein Objekt als Parameter akzeptieren, das eine `update`-Callback-Funktion enthält, die die DOM-Aktualisierungen behandelt, die Sie animieren möchten, und ein `types`-Array, das Zeichenfolgen enthält, die die Typnamen repräsentieren.

Betrachten wir ein Beispiel aus unserer [SPA Transition Types Gallery](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/):

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

Wenn die Schaltfläche "Vorher" gedrückt wird, wird dieser Code ausgeführt — die Callback-Funktion aktualisiert das angezeigte Bild, um das vorherige Bild in der Sequenz anzuzeigen (einschließlich der Aktualisierung seines `alt`-Texts, `data-id`, das die Sequenznummer darstellt, und der Beschriftung), und das `types`-Array gibt an, dass die View-Transition mit einem Typ von `backwards` ausgeführt werden soll.

> [!NOTE]
> Die in dem `types`-Array der View-Transition gesetzten Typen können über die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des von der `startViewTransition()`-Methode zurückgegebenen [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts abgerufen werden. Die `types`-Eigenschaft ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dies ist ein [set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die Typen, die auf eine View-Transition angewendet werden, dynamisch mithilfe von darauf vorhandenen Methoden wie `clear()`, `add()`, und `delete()` modifizieren können.

### Anpassen von benutzerdefinierten Animationen in CSS

Im CSS können wir die Stile für die aktive Transition mit den Pseudoklassen {{cssxref(":active-view-transition")}} und {{cssxref(":active-view-transition-type()")}} anpassen. Diese ermöglichen es jeweils, Selektoren zu erstellen, die übereinstimmen, wenn eine View-Transition aktiv ist, oder nur, wenn eine View-Transition mit einem bestimmten Typ aktiv ist.

Zuallererst definieren wir eine Reihe von Stilen, die angewendet werden, wenn eine View-Transition aktiv ist, unabhängig von ihrem Typ, ausgewählt mit `:active-view-transition`. In diesem verschachtelten Block wenden wir einen {{cssxref("view-transition-name")}}-Wert von `none` auf das Dokument {{cssxref(":root")}} an, um die View-Transitions für den Großteil des Dokuments zu deaktivieren. Dann wenden wir `view-transition-name`-Werte von `image` und `caption` auf die {{htmlelement("img")}}- und {{htmlelement("figcaption")}}-Elemente an, sodass Änderungen an deren DOM-Zustand in separaten Snapshots erfasst werden und unabhängig animiert werden können.

Schließlich verwenden wir die {{cssxref("::view-transition-old()")}}- und {{cssxref("::view-transition-new()")}}-Pseudoelemente, um spezifische Animationen auf das `caption` ausgehende und eingehende View anzuwenden. Wir möchten, dass diese Animationen auf das `<figcaption>` angewendet werden, unabhängig vom spezifizierten Typ.

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

Der nächste Schritt besteht darin, unterschiedliche Animationen auf die `image`-ausgehenden und eingehenden Views anzuwenden, abhängig davon, ob der `type` der aktiven View-Transition `forwards` (die "Nächster"-Schaltfläche wurde gedrückt), `backwards` (die "Vorher"-Schaltfläche wurde gedrückt) oder `upwards` (ein Miniaturbild wurde angeklickt) ist. Dies geschieht mit drei `:active-view-transition-type()` Regelblöcken, die jeweils unterschiedliche {{cssxref("animation-name")}}-Werte auf die `::view-transition-old()`- und `::view-transition-new()`-Pseudoelemente für jeden separaten Typ anwenden:

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

Im Fall der `::view-transition-new(image)`-Animation für den `upwards`-Typ haben wir auch einen {{cssxref("animation-delay")}}-Wert von `0.6s` einbezogen, um das neue Inhaltselement erst dann von oben in den Bildschirm gleiten zu lassen, wenn das alte Inhaltselement ausgeblendet ist. Es sieht in diesem Fall seltsam aus, wenn sich die beiden überlappen.

Weiter unten im Stylesheet setzen wir die {{cssxref("animation-duration")}} aller Animationen in allen Gruppen auf `0.6s`, was erklärt, warum die zuvor gesetzte Verzögerung `0.6s` war:

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> Aus Gründen der Kürze haben wir nicht den gesamten {{cssxref("@keyframes")}}-Definitioncode für die oben genannten Animationen gezeigt. Sie können diese im [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types) finden.

## Verwendung von Typen mit Cross-Document-View-Transitionen über `@view-transition`

Um unterschiedliche Typen auf Cross-Document-View-Transitionen anzuwenden, können Sie diese im [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types)-Deskriptor der {{cssxref("@view-transition")}} At-Regel setzen, die einen oder mehrere durch Kommas getrennte Typen enthält.

Zum Beispiel sieht die `@view-transition` At-Regel in unserem [MPA Transition Types Example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) im gemeinsamen Stylesheet so aus:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Im CSS können wir die auf die aktive View-Transition angewendeten Animationen basierend auf ihrem Typ in derselben Weise anpassen, wie wir es im SPA-Beispiel getan haben:

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

Hier wenden wir mehrere Stile an, wenn die aktive View-Transition einen `type` von `slide` hat, indem wir den `:active-view-transition-type(slide)` Selektor verwenden. Wir wenden einen `view-transition-name` von `none` auf das `:root`-Element an, um jede Snapshoterfassung zu stoppen, und überschreiben es dann mit einem auf das `<section>`-Element der Seite gesetzten `view-transition-name` von `chapter` — dies ist der einzige Teil der Dokumente, auf den wir eine View-Transition anwenden möchten.

Als nächstes verwenden wir `::view-transition-old(chapter)` und `::view-transition-new(chapter)`, um benutzerdefinierte Animationen auf das `<section>` anzuwenden, während dessen Inhalt zwischen den Seiten übergeht.

## Anwendung unterschiedlicher Cross-Document-Typen mit `pageswap` und `pagereveal` Ereignissen

Das oben Genannte funktioniert gut, aber es ist nicht ideal — wenn zu einer neuen Seite navigiert wird, verschwindet der alte Seiteninhalt immer nach links, und der neue Seiteninhalt erscheint immer von rechts. Diese Animation ist in Ordnung, wenn Sie zu einem späteren Kapitel wechseln, aber (zumindest für Benutzer von Links-nach-Rechts-Sprachen wie Englisch) fühlt es sich kontraintuitiv an, wenn Sie zu einem früheren Kapitel wechseln. Für Bewegungen von späteren zu früheren Kapiteln wäre es besser, die Animationsrichtung umzukehren.

Um unterschiedliche Typen auf die aktive View-Transition basierend auf verschiedenen Navigationstypen anzuwenden, müssen wir die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des entsprechenden `ViewTransition`-Objekts manipulieren. Dies ist verfügbar in:

- Der [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Ereignisobjekteigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisses im Fall der ausgehenden Seite.
- Der [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Ereignisobjekteigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisses im Fall der eingehenden Seite.

Das [MPA Multiple Transition Types Example](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) demonstriert, wie diese Technik verwendet wird. Dies ist dem vorherigen Beispiel ähnlich, jedoch mit einigen bemerkenswerten Unterschieden, die wir unten erklären werden.

### Bestimmung des Animationstyps über JavaScript

Betrachten wir die gemeinsame JavaScript-Datei. Zuerst definieren wir eine benutzerdefinierte Funktion, `determineTransitionType()`, die sich die URL der ausgehenden Seite und der eingehenden Seite ansieht und daraus bestimmt, ob der Navigationstyp `backwards` (zu einem früheren Kapitel) oder `forwards` (zu einem späteren Kapitel) ist.

Die Kapitel-Seiten sind sequenziell benannt (`index.html`, dann `index2.html`, `index3.html`, usw.), daher vergleichen wir die in den Dateinamen enthaltenen Zahlen, um festzustellen, ob die Navigation `backwards` (die Ausgehende Seitennummer ist höher als die Eingehende Seitennummer) oder `forwards` (die Ausgehende Seitennummer ist niedriger als die Eingehende Seitennummer) ist.

Der Code, den Sie verwenden, um den Typ zu bestimmen, den Sie anwenden möchten, hängt von Ihrem Projekt ab. Sie finden ausführliche Kommentare, die erklären, wie der unten stehende Code funktioniert, in unserem [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types).

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

Als nächstes verwenden wir einen [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis-Listener, um den Transition-Typ für die ausgehende Seite festzulegen. Innerhalb der Ereignis-Handler-Funktion holen wir die alten und neuen Navigationseinträge von der [`activation`](/de/docs/Web/API/PageSwapEvent/activation)-Eigenschaft des Ereignisobjekts, übergeben diese an die `determineTransitionType()`-Funktion, um den Typ zu bestimmen, und weisen dann den Typ der View-Transition mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu.

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

Schließlich verwenden wir einen [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis-Listener, um den Transition-Typ für die eingehende Seite festzulegen. Innerhalb der Ereignis-Handler-Funktion holen wir die alten und neuen Navigationseinträge von der [`Navigation.activation`](/de/docs/Web/API/Navigation/activation)-Eigenschaft und übergeben diese an die `determineTransitionType()`-Funktion, um den Typ zu bestimmen. Wir weisen den Typ der View-Transition mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu, es sei denn, der Typ ist `undefined`, in welchem Fall wir diesen Schritt überspringen.

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
> Die `determineTransitionType()`-Funktion kann `undefined` zurückgeben, wenn weder die `backwards`- noch die `forwards`-Bedingungen wahr sind. Dies kann auftreten, wenn der Benutzer die Seite neu lädt, in welchem Fall die aktuelle Seite und die Zielseite die gleiche Seite sind, daher sind die Indexwerte gleich.

### Anpassen von benutzerdefinierten Animationen in CSS

Jetzt, da wir einen geeigneten Typ auf die aktive View-Transition gesetzt haben, abhängig vom Navigationstyp, können wir unterschiedliche Animationen für jeden Typ in unserem CSS setzen, wie wir es in den vorherigen Beispielen gesehen haben:

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

Beachten Sie auch, dass wir den `types`-Deskriptor aus der `@view-transition` At-Regel im gemeinsamen CSS entfernt haben. Wir benötigen den `navigation`-Deskriptor, um Cross-Document-View-Transitionen zu ermöglichen, aber wir behandeln Typen in unserem JavaScript, daher müssen wir sie hier nicht festlegen.

```css
@view-transition {
  navigation: auto;
}
```

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Umgang mit mehreren View-Transition-Stilen mit View-Transition-Typen (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) auf developer.chrome.com (2024)
- [View-Transition-Typen in Cross-Document-View-Transitionen](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) auf developer.chrome.com (2024)
