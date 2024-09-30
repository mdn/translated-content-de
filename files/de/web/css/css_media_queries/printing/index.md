---
title: Printing
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Es kann Zeiten geben, in denen Ihre Website oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten hochauflösendere Bilder für ein besseres Ergebnis verwenden.
- Sie möchten das Benutzererlebnis beim Drucken anpassen, indem Sie beispielsweise eine speziell formatierte Version Ihrer Inhalte präsentieren, bevor der Druck beginnt.

Es kann auch andere Fälle geben, in denen Sie den Druckprozess verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihre Webinhalte besser drucken zu lassen.

## Verwendung eines Druck-Stylesheets

Fügen Sie Folgendes zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwendung von Media Queries und @page zur Steuerung gedruckter Inhalte

Sie können die CSS-{{cssxref("@media")}}-At-Regel verwenden, um für Ihre Webseite unterschiedliche Stile festzulegen, wenn sie auf Papier oder als PDF gedruckt wird, im Vergleich zu der Anzeige auf dem Bildschirm. Der `print`-[Medientyp](/de/docs/Web/CSS/@media#media_types) legt die Stile für gedruckte Medien fest; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass die [Spezifität](/de/docs/Web/CSS/Specificity) und Vorrangregeln weiterhin gelten:

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

Sie können auch die {{cssxref("@page")}}-At-Regel verwenden, um verschiedene Aspekte gedruckter Seiten zu ändern, einschließlich der Dimensionen, Ausrichtung und Ränder der Seite. Die `@page`-At-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder nur eine bestimmte Teilmenge von Seiten zu adressieren.

## Erkennen von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und [`afterprint`](/de/docs/Web/API/Window/afterprint_event)-Ereignisse, um zu bestimmen, wann ein Druckvorgang eingeleitet wurde. Sie können dies verwenden, um die Benutzeroberfläche während des Druckens anzupassen (zum Beispiel um UI-Elemente während des Druckvorgangs anzuzeigen oder zu verbergen).

## Beispiele

Hier sind einige gängige Beispiele.

### Fenster nach Abschluss automatisch schließen

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer dessen Inhalt gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Eine externe Seite drucken, ohne sie zu öffnen

Möchten Sie eine externe Seite drucken, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} nutzen (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das nach dem Drucken des Inhalts automatisch entfernt wird. Folgendes ist ein mögliches Beispiel, das eine Datei namens `externalPage.html` druckt:

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
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS paged media](/de/docs/Web/CSS/CSS_paged_media) Modul
