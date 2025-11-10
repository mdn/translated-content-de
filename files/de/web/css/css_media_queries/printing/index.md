---
title: Drucken
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Es kann vorkommen, dass Ihre Webseite oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten verschiedene Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten Bilder in höherer Auflösung verwenden, um ein besseres Druckergebnis zu erzielen.
- Sie möchten die Benutzererfahrung des Druckens anpassen, z. B. eine speziell formatierte Version Ihres Inhalts präsentieren, bevor der Druck beginnt.

Es kann weitere Fälle geben, in denen Sie den Druckprozess verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihren Webinhalt besser drucken zu können.

## Verwendung eines Druck-Stylesheets

Fügen Sie das Folgende zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwendung von Media Queries und @page zur Steuerung des gedruckten Inhalts

Sie können die CSS-At-Regel {{cssxref("@media")}} verwenden, um verschiedene Stile für Ihre Webseite festzulegen, wenn sie auf Papier oder als PDF gedruckt wird, im Gegensatz zur Anzeige auf dem Bildschirm. Der `print` [Medientyp](/de/docs/Web/CSS/Reference/At-rules/@media#media_types) legt die Stile für gedruckte Medien fest; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) und Vorrangregeln weiterhin gelten:

```css
@media print {
  /* All your print styles go here */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

Sie können auch die At-Regel {{cssxref("@page")}} verwenden, um verschiedene Aspekte von gedruckten Seiten, einschließlich der Abmessungen, Ausrichtung und Ränder der Seite, zu ändern. Die `@page`-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder nur einen bestimmten Teil der Seiten anzusprechen.

## Erkennung von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und [`afterprint`](/de/docs/Web/API/Window/afterprint_event) Ereignisse, um festzustellen, wann ein Druckvorgang stattgefunden haben könnte. Dies können Sie nutzen, um die Benutzeroberfläche, die während des Druckvorgangs angezeigt wird, anzupassen (z. B. das Anzeigen oder Ausblenden von Elemente der Benutzeroberfläche während des Druckvorgangs).

## Beispiele

Hier einige gängige Beispiele.

### Fenster automatisch schließen, wenn der Druckvorgang abgeschlossen ist

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer dessen Inhalt gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Eine externe Seite drucken, ohne sie zu öffnen

Wenn Sie eine externe Seite drucken möchten, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das automatisch entfernt wird, nachdem der Benutzer den Inhalt gedruckt hat. Das folgende ist ein mögliches Beispiel, das eine Datei mit dem Namen `externalPage.html` druckt:

#### HTML

```html
<button id="print_external">Print external page!</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // hide iframe
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## Siehe auch

- [`window.print`](/de/docs/Web/API/Window/print)
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) Ereignis
- [`afterprint`](/de/docs/Web/API/Window/afterprint_event) Ereignis
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
- [CSS Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) Modul
