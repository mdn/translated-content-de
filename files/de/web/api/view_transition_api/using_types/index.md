---
title: Verwendung von Ansichtstransitionstypen
slug: Web/API/View_Transition_API/Using_types
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

{{DefaultAPISidebar("View Transition API")}}

Ansichtstransitionstypen bieten einen Mechanismus, durch den verschiedene **Typen** für aktive Ansichtstransitionen spezifiziert werden können. Mit CSS kann dann festgelegt werden, welche Animationen auf DOM-Elemente angewendet werden, wenn sich deren Inhalte aktualisieren, abhängig vom angegebenen Transitionstyp. Beispielsweise möchten Sie möglicherweise unterschiedliche Animationen auf ein {{htmlelement("img")}}-Element in einer Bildergalerie-App anwenden, während das angezeigte Bild wechselt – je nachdem, ob Sie vorwärts oder rückwärts in der Sequenz gehen, ein Bild löschen oder ein Bild in die Sequenz einfügen.

Dieser Artikel zeigt, wie Typen zusammen mit Dokument-interne Ansichtstransitionen und übergreifende Dokument-Ansichtstransitionen genutzt werden.

## Beispiele

Wir zeigen, was Sie über Ansichtstransitionstypen wissen müssen, anhand von Codes in den folgenden drei Beispielen:

- [SPA-Transitionstypen-Galerie](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): Eine SPA-Bildergalerie, die Transitionstypen verwendet, um unterschiedliche Übergangsanimationen anzuwenden, wenn die Bilder zwischen vorheriger Taste, nächster Taste und direktem Klicken auf ein Bild bewegt werden.
- [MPA-Transitionstypen-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): Eine Geschichten-App mit einem Kapitel auf jeder Seite. Zeigt, wie Ansichtstransitionsanimationen über Seiten hinweg selektiv mit einem Transitionstyp angewendet werden können.
- [MPA-Beispiel mit mehreren Transitionstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): Baut auf dem vorherigen Beispiel auf, indem gezeigt wird, wie unterschiedliche Ansichtstransitionsanimationen über Seiten hinweg selektiv mit unterschiedlichen Transitionstypen angewendet werden. Der Transitionstyp wird während der Navigation dynamisch mit JavaScript bestimmt.

Wir werden nicht erklären, wie der gesamte Code funktioniert, sondern uns nur auf die für Ansichtstransitionstypen relevanten Teile konzentrieren. Wir haben Kommentare im Code eingefügt, um zu erläutern, was jeder Teil tut.

## Verwendung von Typen mit SPA-Ansichtstransitionen

Um verschiedene Typen auf SPA-Ansichtstransitionen anzuwenden, übergeben wir die Typnamen an den Aufruf der [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)-Methode, die die Transition startet. Die Methode kann ein Objekt als Parameter akzeptieren, das eine `update`-Callback-Funktion enthält, die die gewünschten DOM-Updates animiert, und ein `types`-Array mit Zeichenfolgen, die die Typnamen darstellen.

Schauen wir uns ein Beispiel aus unserer [SPA-Transitionstypen-Galerie](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) an:

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

Wenn die "Vorherige"-Taste gedrückt wird, wird dieser Code ausgeführt – die Callback-Funktion aktualisiert das angezeigte Bild, um das vorherige Bild in der Sequenz anzuzeigen (einschließlich der Aktualisierung des alt-Textes, `data-id`, das die Sequenznummer darstellt, und der Beschriftung), und das `types`-Array gibt an, dass die Ansichtstransition mit einem Typ von `backwards` ausgeführt werden soll.

> [!NOTE]
> Die Typen, die auf die Ansichtstransition im `types`-Array gesetzt werden, können über die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des von der `startViewTransition()`-Methode zurückgegebenen [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts abgerufen werden. Die `types`-Eigenschaft ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dies ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die auf eine Ansichtstransition angewendeten Typen im laufenden Betrieb mithilfe verfügbarer Methoden wie `clear()`, `add()` und `delete()` ändern können.

### Anwenden benutzerdefinierter Animationen in CSS

In CSS können wir die Stile für die aktive Transition mit den Pseudoklassen {{cssxref(":active-view-transition")}} und {{cssxref(":active-view-transition-type()")}} anpassen. Diese erlauben Ihnen jeweils, Selektoren zu erstellen, die bei aktiven Ansichtstransitionen übereinstimmen, oder nur bei einer Ansichtstransition mit einem bestimmten Typ aktiv sind.

Zunächst definieren wir eine Reihe von Stilen, die angewendet werden, wenn eine Ansichtstransition aktiv ist, unabhängig von ihrem Typ, ausgewählt mit `:active-view-transition`. In diesem verschachtelten Block wenden wir einen {{cssxref("view-transition-name")}}-Wert von `none` auf das Dokument {{cssxref(":root")}} an, um Ansichtstransitionen für den Großteil des Dokuments auszuschalten. Dann wenden wir `view-transition-name`-Werte von `image` und `caption` auf die {{htmlelement("img")}}- und {{htmlelement("figcaption")}}-Elemente an, damit Änderungen an ihrem DOM-Zustand in separaten Schnappschüssen erfasst und unabhängig animiert werden können.

Schließlich verwenden wir die {{cssxref("::view-transition-old()")}}- und {{cssxref("::view-transition-new()")}}-Pseudo-Elemente, um spezifische Animationen auf die ausgehende und eingehende Ansicht der `caption` anzuwenden. Wir möchten, dass diese Animationen unabhängig vom spezifizierten Typ auf das `<figcaption>` angewendet werden.

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

Im nächsten Schritt werden unterschiedliche Animationen auf die ausgehenden und eingehenden Ansichten der `image` angewendet, abhängig davon, ob der `type` der aktiven Ansichtstransition `forwards` (die "Nächste"-Taste wurde gedrückt), `backwards` (die "Vorherige"-Taste wurde gedrückt) oder `upwards` (ein Vorschaubild wurde angeklickt) ist. Dies erfolgt mit drei `:active-view-transition-type()`-Regelsets, die jeweils unterschiedliche {{cssxref("animation-name")}}-Werte auf die `::view-transition-old()`- und `::view-transition-new()`-Pseudo-Elemente für jeden Typ anwenden:

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

Im Fall der `::view-transition-new(image)`-Animation für den `upwards`-Typ haben wir auch einen {{cssxref("animation-delay")}}-Wert von `0.6s` eingefügt, um zu verhindern, dass der neue Inhalt von oben auf den Bildschirm kommt, bevor der alte Inhalt herausgerutscht ist. Es sieht in diesem Fall seltsam aus, wenn sich die beiden überlappen.

Weiter unten im Stylesheet setzen wir die {{cssxref("animation-duration")}} aller Animationen in allen Gruppen auf `0.6s`, was erklärt, warum die zuvor eingestellte Verzögerung `0.6s` betrug:

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> Der Übersichtlichkeit halber haben wir nicht den gesamten {{cssxref("@keyframes")}}-Definitionscode für die oben genannten Animationen gezeigt. Sie finden diesen im [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types).

## Verwendung von Typen mit übergreifenden Dokument-Ansichtstransitionen über `@view-transition`

Um unterschiedliche Typen auf übergreifende Dokument-Ansichtstransitionen anzuwenden, können Sie diese im [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types)-Deskriptor der {{cssxref("@view-transition")}}-At-Regel festlegen, die einen oder mehrere durch Kommas getrennte Typen enthält.

Zum Beispiel sieht die `@view-transition`-At-Regel im gemeinsamen Stylesheet unseres [MPA-Transitionstypen-Beispiels](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) so aus:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

In CSS können wir die auf die aktive Ansichtstransition angewendeten Animationen basierend auf ihrem Typ genauso anpassen wie im SPA-Beispiel:

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

Hier wenden wir verschiedene Stile an, wenn die aktive Ansichtstransition einen `type` von `slide` hat, unter Verwendung des `:active-view-transition-type(slide)`-Selectors. Wir setzen einen `view-transition-name` von `none` auf das `:root`-Element, um alle Schnappschusserfassungen zu stoppen, und überschreiben es dann mit einem `view-transition-name` von `chapter`, das auf das `<section>`-Element der Seite gesetzt ist – dies ist der einzige Teil der Dokumente, auf den wir eine Ansichtstransition anwenden möchten.

Als nächstes verwenden wir `::view-transition-old(chapter)` und `::view-transition-new(chapter)`, um benutzerdefinierte Animationen auf das `<section>` anzuwenden, während dessen Inhalte zwischen den Seiten wechseln.

## Anwendung unterschiedlicher übergreifender Dokumenttypen mit `pageswap`- und `pagereveal`-Ereignissen

Das oben funktioniert in Ordnung, ist aber nicht ideal – wenn zu einer neuen Seite navigiert wird, verschwindet der alte Seiteninhalt immer nach links, und der neue Seiteninhalt erscheint immer von rechts. Diese Animation ist in Ordnung, wenn Sie zu einem späteren Kapitel wechseln, aber (zumindest für Benutzer von Links-nach-Rechts-Sprachen wie Englisch) fühlt es sich kontraintuitiv an, wenn Sie zu einem früheren Kapitel gehen. Für Bewegungen von späteren zu früheren Kapiteln wäre es besser, die Animationsrichtung umzukehren.

Um unterschiedliche Typen auf die aktive Ansichtstransition basierend auf verschiedenen Navigationstypen anzuwenden, müssen wir die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des entsprechenden `ViewTransition`-Objekts manipulieren. Diese ist verfügbar im:

- [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Ereignisobjekteigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisses im Fall der ausgehenden Seite.
- [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Ereignisobjekteigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisses im Fall der eingehenden Seite.

Das [MPA-Beispiel mit mehreren Transitionstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) zeigt, wie diese Technik verwendet wird. Dies ist ähnlich dem vorherigen Beispiel, aber mit einigen bemerkenswerten Unterschieden, die wir unten erklären werden.

### Bestimmung des Animationstyps über JavaScript

Schauen wir uns die gemeinsame JavaScript-Datei an. Zuerst definieren wir eine benutzerdefinierte Funktion, `determineTransitionType()`, die die URLs der ausgehenden und eingehenden Seite betrachtet und daraus bestimmt, ob der Navigationstyp `backwards` (Wechsel zu einem früheren Kapitel) oder `forwards` (Wechsel zu einem späteren Kapitel) ist.

Die Kapitel-Seiten sind sequenziell benannt (`index.html`, dann `index2.html`, `index3.html` usw.), daher vergleichen wir die Zahlen in den Dateinamen, um herauszufinden, ob die Navigation `backwards` (ausgehende Seitennummer ist höher als eingehende Seitennummer) oder `forwards` (ausgehende Seitennummer ist niedriger als eingehende Seitennummer) ist.

Der Code, den Sie zur Bestimmung des anzuwendenden Typs verwenden, hängt von Ihrem Projekt ab. Sie finden ausführliche Kommentare, die erläutern, wie der untenstehende Code funktioniert, in unserem [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types).

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

Als nächstes verwenden wir einen [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignislistener, um den Transitionstyp für die ausgehende Seite zu setzen. Innerhalb der Ereignishandlerfunktion holen wir die alten und neuen Navigationseinträge aus der [`activation`](/de/docs/Web/API/PageSwapEvent/activation)-Eigenschaft des Ereignisobjekts, geben diese der `determineTransitionType()`-Funktion, um den Typ zu bestimmen und weisen der Ansichtstransition den Typ mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu.

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

Schließlich verwenden wir einen [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignislistener, um den Transitionstyp für die eingehende Seite zu setzen. Innerhalb der Ereignishandlerfunktion holen wir die alten und neuen Navigationseinträge aus der [`Navigation.activation`](/de/docs/Web/API/Navigation/activation)-Eigenschaft und geben diese der `determineTransitionType()`-Funktion, um den Typ zu bestimmen. Wir weisen der Ansichtstransition den Typ mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu, es sei denn, der Typ ist `undefined`, in welchem Fall wir diesen Schritt überspringen.

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
> Die `determineTransitionType()`-Funktion kann `undefined` zurückgeben, wenn weder die `backwards`- noch die `forwards`-Bedingungen zutreffen. Dies kann passieren, wenn der Benutzer die Seite neu lädt und somit die aktuelle Seite und die Zielseite dieselbe Seite sind, weshalb die Indexwerte gleich sind.

### Anwenden benutzerdefinierter Animationen in CSS

Jetzt haben wir je nach Navigationstyp einen entsprechenden Typ auf die aktive Ansichtstransition gesetzt, wir können in unserem CSS unterschiedliche Animationen für jeden Typ festlegen, so wie wir es in den vorherigen Beispielen gesehen haben:

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

Beachten Sie auch, dass wir den `types`-Deskriptor aus der `@view-transition`-At-Regel im gemeinsamen CSS entfernt haben. Wir benötigen den `navigation`-Deskriptor, um übergreifende Dokument-Ansichtstransitionen zu aktivieren, aber wir behandeln Typen in unserem JavaScript, daher müssen wir sie hier nicht setzen.

```css
@view-transition {
  navigation: auto;
}
```

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Behandeln mehrerer Ansichtstransitionsstile mit Ansichtstransitionstypen (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) auf developer.chrome.com (2024)
- [Ansichtstransitionstypen in übergreifenden Dokument-Ansichtstransitionen](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) auf developer.chrome.com (2024)
