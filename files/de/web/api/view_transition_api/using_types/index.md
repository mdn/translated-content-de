---
title: Verwenden von View-Übergangstypen
slug: Web/API/View_Transition_API/Using_types
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{DefaultAPISidebar("View Transition API")}}

View-Übergangstypen bieten einen Mechanismus, durch den verschiedene **Typen** für aktive View-Übergänge spezifiziert werden können. CSS kann dann verwendet werden, um unterschiedliche Animationen auf DOM-Elemente anzuwenden, wenn deren Inhalt aktualisiert wird, abhängig vom angegebenen Übergangstyp. Beispielsweise möchten Sie möglicherweise unterschiedliche Animationen auf ein {{htmlelement("img")}}-Element in einer Bildergalerie-App anwenden, wenn sich das angezeigte Bild ändert, je nachdem, ob Sie sich vorwärts oder rückwärts in der Sequenz bewegen, ein Bild löschen oder ein Bild in die Sequenz einfügen.

Dieser Artikel zeigt, wie Sie Typen zusammen mit Dokument-Übergängen und Übergängen zwischen Dokumenten verwenden.

## Beispiele

Wir demonstrieren, was Sie über View-Übergangstypen wissen müssen, indem wir den Code in den folgenden drei Beispielen durchgehen:

- [SPA-Übergangstypen-Galerie](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): Eine SPA-Bildergalerie, die Übergangstypen verwendet, um unterschiedliche Übergangsanimationen anzuwenden, wenn die Bilder mit der Vortaste, der Nächstetaste und durch direktes Klicken auf ein Bild bewegt werden.
- [MPA-Übergangstypen-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): Eine Story-App mit einem Kapitel auf jeder Seite. Zeigt, wie View-Übergangsanimationen selektiv über Seiten hinweg mit einem Übergangstyp angewendet werden.
- [MPA-Beispiel für mehrere Übergangstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): Baut auf dem vorherigen Beispiel auf, indem gezeigt wird, wie unterschiedliche View-Übergangsanimationen selektiv über Seiten hinweg mit verschiedenen Übergangstypen angewendet werden. Der Übergangstyp wird während der Navigation mit JavaScript dynamisch bestimmt.

Wir werden nicht erklären, wie der gesamte Code funktioniert, sondern nur die Teile, die für View-Übergangstypen relevant sind. Wir haben Kommentare im Code bereitgestellt, um zu erklären, was jeder Teil macht.

## Verwenden von Typen mit SPA-View-Übergängen

Um unterschiedliche Typen auf SPA-View-Übergänge anzuwenden, übergeben wir die Typennamen in den Aufruf der Methode [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), der den Übergang einleitet. Die Methode kann ein Objekt als Parameter akzeptieren, das eine `update`-Rückruffunktion enthält, die die DOM-Updates behandelt, die Sie animieren möchten, und ein `types`-Array mit Zeichenfolgen, die die Typennamen darstellen.

Sehen wir uns ein Beispiel aus unserer [SPA-Übergangstypen-Galerie](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) an:

```js
document.startViewTransition({
  update: () => {
    displayedImage.src = `${baseURL}${images[newId].filename}`;
    displayedImage.alt = images[newId].alt;
    displayedImage.setAttribute("data-id", newId);
    caption.textContent = images[newId].alt;
  },
  types: ["backwards"],
});
```

Wenn die Taste "Zurück" gedrückt wird, wird dieser Code ausgeführt — die Rückruffunktion aktualisiert das angezeigte Bild, um das vorherige Bild in der Sequenz anzuzeigen (einschließlich der Aktualisierung des Alt-Textes, `data-id`, der die Sequenznummer darstellt, und der Bildunterschrift) und das `types`-Array gibt an, dass der View-Übergang mit einem Typ von `backwards` ausgeführt werden soll.

> [!NOTE]
> Die auf den View-Übergang im `types`-Array gesetzten Typen können über die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des vom `startViewTransition()`-Methode zurückgegebenen [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekts abgerufen werden. Die `types`-Eigenschaft ist ein [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet). Dies ist ein [Set-artiges Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), was bedeutet, dass Sie die auf einen View-Übergang angewandten Typen dynamisch mit den darauf verfügbaren Methoden wie `clear()`, `add()` und `delete()` ändern können.

### Anpassen von benutzerdefinierten Animationen in CSS

Im CSS können wir die Stile für den aktiven Übergang mithilfe der Pseudo-Klassen {{cssxref(":active-view-transition")}} und {{cssxref(":active-view-transition-type()")}} anpassen. Damit können Sie jeweils Selektoren erstellen, die übereinstimmen, wenn ein beliebiger View-Übergang aktiv ist, oder nur, wenn ein View-Übergang mit einem bestimmten Typ aktiv ist.

Zunächst definieren wir eine Reihe von Stilen, die angewendet werden, wenn ein View-Übergang aktiv ist, unabhängig von seinem Typ, ausgewählt mit `:active-view-transition`. In diesem verschachtelten Block wenden wir einen {{cssxref("view-transition-name")}}-Wert von `none` auf das Dokument-{{cssxref(":root")}} an, um View-Übergänge für den größten Teil des Dokuments auszuschalten. Dann wenden wir `view-transition-name`-Werte von `image` und `caption` auf die {{htmlelement("img")}}- und {{htmlelement("figcaption")}}-Elemente an, damit Änderungen an ihrem DOM-Zustand in separaten Schnappschüssen erfasst werden und sie unabhängig animiert werden können.

Abschließend verwenden wir die Pseudo-Elemente {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}, um spezifische Animationen auf die ausgehende und eingehende Ansicht der `caption` anzuwenden. Wir möchten, dass diese Animationen auf die `<figcaption>` angewendet werden, unabhängig von dem angegebenen Typ.

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

Der nächste Schritt besteht darin, unterschiedliche Animationen auf die ausgehenden und eingehenden Ansichten des `image`-Elements anzuwenden, abhängig davon, ob der `type` des aktiven View-Übergangs `forwards` (die "Weiter"-Taste wurde gedrückt), `backwards` (die "Zurück"-Taste wurde gedrückt) oder `upwards` (ein Thumbnail-Bild wurde angeklickt) ist. Dies geschieht durch drei `:active-view-transition-type()`-Regelsets, die jeweils unterschiedliche {{cssxref("animation-name")}}-Werte auf die `::view-transition-old()`- und `::view-transition-new()`-Pseudo-Elemente für jeden separaten Typ anwenden:

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

Im Fall der `::view-transition-new(image)`-Animation für den `upwards`-Typ haben wir auch einen {{cssxref("animation-delay")}}-Wert von `0.6s` hinzugefügt, um zu verhindern, dass der neue Inhalt von oben in den Bildschirm einblendet, bis der alte Inhalt vollständig ausgeblendet ist. In diesem Fall sieht es seltsam aus, wenn sich die beiden überlappen.

Weiter unten im Stylesheet setzen wir die {{cssxref("animation-duration")}} aller Animationen in allen Gruppen auf `0.6s`, was erklärt, warum die zuvor festgelegte Verzögerung `0.6s` beträgt:

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> Der Kürze halber haben wir nicht den gesamten {{cssxref("@keyframes")}}-Definitionscode für die oben genannten Animationen gezeigt. Sie finden diese im [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types).

## Verwenden von Typen mit Übergängen zwischen Dokumenten über `@view-transition`

Um verschiedene Typen auf Übergänge zwischen Dokumenten anzuwenden, können Sie diese im [`types`](/de/docs/Web/CSS/Reference/At-rules/@view-transition#types)-Deskriptor der {{cssxref("@view-transition")}}-Regel festlegen, die einen oder mehrere durch Kommas getrennte Typen enthält.

Zum Beispiel sieht in unserem [MPA-Übergangstypen-Beispiel](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) die `@view-transition`-Regel im gemeinsamen Stylesheet so aus:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Im CSS können wir die auf den aktiven View-Übergang angewandten Animationen basierend auf seinem Typ auf die gleiche Weise anpassen, wie wir es im SPA-Beispiel getan haben:

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

Hier wenden wir mehrere Stile an, wenn der aktive View-Übergang einen `type` von `slide` hat, indem wir den `:active-view-transition-type(slide)`-Selektor verwenden. Wir setzen einen `view-transition-name` von `none` auf das `:root`-Element, um jegliche Schnappschussaufnahme zu stoppen und überschreiben es dann mit einem `view-transition-name` von `chapter`, der auf das `<section>`-Element der Seite gesetzt wird — dies ist der einzige Teil der Dokumente, auf den wir einen View-Übergang anwenden möchten.

Als nächstes verwenden wir `::view-transition-old(chapter)` und `::view-transition-new(chapter)`, um benutzerdefinierte Animationen auf das `<section>`-Element anzuwenden, während dessen Inhalt zwischen den Seiten übergeht.

## Verschiedene Übergangstypen zwischen Dokumenten mit `pageswap`- und `pagereveal`-Events anwenden

Das Obige funktioniert in Ordnung, aber es ist nicht ideal — wenn zu einer neuen Seite navigiert wird, verschwindet der alte Seiteninhalt immer nach links, und der neue Seiteninhalt erscheint immer von rechts. Diese Animation ist in Ordnung, wenn Sie zu einem späteren Kapitel wechseln, aber (zumindest für Benutzer von links-nach-rechts-Sprachen wie Englisch) fühlt es sich kontraintuitiv an, wenn Sie zu einem früheren Kapitel wechseln. Für Bewegungen von späteren zu früheren Kapiteln wäre es besser, die Animationsrichtung umzukehren.

Um verschiedene Typen auf den aktiven View-Übergang basierend auf verschiedenen Navigationstypen anzuwenden, müssen wir die [`types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft des entsprechenden `ViewTransition`-Objekts manipulieren. Dies ist verfügbar im:

- [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Ereignisobjekteigenschaft des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisses im Fall der ausgehenden Seite.
- [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Ereignisobjekteigenschaft des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisses im Fall der eingehenden Seite.

Das [MPA-Beispiel für mehrere Übergangstypen](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) zeigt, wie man diese Technik verwendet. Dies ähnelt dem vorherigen Beispiel, jedoch mit einigen bemerkenswerten Unterschieden, die wir unten erläutern werden.

### Den Animationstyp über JavaScript bestimmen

Sehen wir uns die gemeinsame JavaScript-Datei an. Zuerst definieren wir eine benutzerdefinierte Funktion, `determineTransitionType()`, die die URL der ausgehenden Seite und der eingehenden Seite betrachtet und daraus bestimmt, ob der Navigationstyp `backwards` (Bewegung zu einem früheren Kapitel) oder `forwards` (Bewegung zu einem späteren Kapitel) ist.

Die Kapitel-Seiten sind sequentiell benannt (`index.html`, dann `index2.html`, `index3.html` usw.), daher vergleichen wir die Zahl, die in den Dateinamen enthalten ist, um zu sehen, ob die Navigation `backwards` (ausgehende Seitennummer ist höher als eingehende Seitennummer) oder `forwards` (ausgehende Seitennummer ist niedriger als eingehende Seitennummer) ist.

Der Code, den Sie verwenden, um den anzuwendenden Typ zu bestimmen, hängt von Ihrem Projekt ab. Sie können detaillierte Kommentare, die erklären, wie der untenstehende Code funktioniert, in unserem [Quellcode](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types) finden.

```js
const determineTransitionType = (oldNavigationEntry, newNavigationEntry) => {
  const currentURL = oldNavigationEntry.url;
  const destinationURL = newNavigationEntry.url;

  function determinePageIndex(url) {
    const array = url.split("/");
    const slug = array[array.length - 1];
    if (slug.indexOf("html") === -1) {
      return 0;
    } else {
      const pageIndex = slug.replace("index", "").replace(".html", "");
      if (pageIndex === "") {
        return 0;
      } else {
        return parseInt(pageIndex);
      }
    }
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

Als Nächstes verwenden wir einen [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis-Listener, um den Übergangstyp für die ausgehende Seite festzulegen. Im Inneren der Event-Handler-Funktion erfassen wir die alten und neuen Navigationseinträge aus der [`activation`](/de/docs/Web/API/PageSwapEvent/activation)-Eigenschaft des Ereignisobjekts, übergeben diese an die Funktion `determineTransitionType()`, um den Typ zu bestimmen, und weisen dann den Typ dem View-Übergang mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu.

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

Abschließend verwenden wir einen [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis-Listener, um den Übergangstyp für die eingehende Seite festzulegen. Innerhalb der Event-Handler-Funktion erfassen wir die alten und neuen Navigationseinträge aus der [`Navigation.activation`](/de/docs/Web/API/Navigation/activation)-Eigenschaft und übergeben diese an die Funktion `determineTransitionType()`, um den Typ zu bestimmen. Wir weisen den Typ dem View-Übergang mithilfe der `add()`-Methode der [`ViewTransition.types`](/de/docs/Web/API/ViewTransition/types)-Eigenschaft zu, es sei denn, der Typ ist `undefined`, in diesem Fall überspringen wir diesen Schritt.

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
> Die Funktion `determineTransitionType()` kann `undefined` zurückgeben, wenn weder die `backwards`- noch die `forwards`-Bedingungen zutreffen. Dies kann vorkommen, wenn der Benutzer die Seite neu lädt, in welchem Fall die aktuelle Seite und die Zielseite die gleiche Seite sind, daher sind die Indexwerte gleich.

### Anpassen von benutzerdefinierten Animationen in CSS

Jetzt, da wir je nach Navigationstyp einen geeigneten Typ auf den aktiven View-Übergang gesetzt haben, können wir unterschiedliche Animationen für jeden Typ in unserem CSS festlegen, so wie wir es in den vorherigen Beispielen gesehen haben:

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

Beachten Sie auch, dass wir den `types`-Deskriptor aus der `@view-transition`-Regel im gemeinsamen CSS entfernt haben. Wir benötigen den `navigation`-Deskriptor, um Übergänge zwischen Dokumenten zu ermöglichen, aber wir behandeln Typen in unserem JavaScript, daher müssen wir sie hier nicht einstellen.

```css
@view-transition {
  navigation: auto;
}
```

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Umgang mit mehreren View-Übergangsstilen mit View-Übergangstypen (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) auf developer.chrome.com (2024)
- [View-Übergangstypen in Übergängen zwischen Dokumenten](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) auf developer.chrome.com (2024)
