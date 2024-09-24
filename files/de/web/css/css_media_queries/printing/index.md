---
title: Drucken
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Es kann vorkommen, dass Ihre Website oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten Bilder mit höherer Auflösung für ein besseres Ergebnis verwenden.
- Sie möchten die Benutzererfahrung beim Drucken anpassen, zum Beispiel indem Sie eine speziell formatierte Version Ihres Inhalts präsentieren, bevor der Druck beginnt.

Es kann auch andere Fälle geben, in denen Sie den Druckprozess steuern möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihre Webinhalte besser drucken zu können.

## Verwendung eines Druck-Stylesheets

Fügen Sie Folgendes zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwendung von Media Queries und @page zur Steuerung gedruckter Inhalte

Sie können die CSS-{{cssxref("@media")}}-At-Regel verwenden, um unterschiedliche Stile für Ihre Webseite festzulegen, wenn sie auf Papier oder als PDF gedruckt wird, im Vergleich zur Anzeige auf dem Bildschirm. Der `print`-[Medientyp](/de/docs/Web/CSS/@media#media_types) legt die Stile für gedruckte Medien fest; diese Stile werden nur für Druckinhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass [Spezifität](/de/docs/Web/CSS/Specificity) und Vorrangregeln weiterhin gelten:

```css
@media print {
  /* Alle Ihre Druckstile kommen hierhin */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

Sie können auch die {{cssxref("@page")}}-At-Regel verwenden, um verschiedene Aspekte gedruckter Seiten zu ändern, einschließlich der Abmessungen, Ausrichtung und Ränder der Seite. Die `@page`-At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder nur einen bestimmten Teil der Seiten zu beeinflussen.

## Erkennung von Druckanforderungen

Browser senden die {{domxref("Window/beforeprint_event", "beforeprint")}}- und {{domxref("Window/afterprint_event", "afterprint")}}-Ereignisse, um festzustellen, wann ein Druckvorgang stattgefunden haben könnte. Sie können dies nutzen, um die Benutzeroberfläche während des Druckvorgangs anzupassen (zum Beispiel das Anzeigen oder Verbergen von Benutzeroberflächenelementen während des Druckprozesses).

## Beispiele

Hier sind einige gängige Beispiele.

### Fenster nach dem Drucken automatisch schließen

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer dessen Inhalte gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Eine externe Seite drucken, ohne sie zu öffnen

Wenn Sie eine externe Seite drucken möchten, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das nach dem Drucken der Inhalte automatisch entfernt wird. Das folgende Beispiel druckt eine Datei namens `externalPage.html`:

#### HTML

```html
<button id="print_external">Externe Seite drucken!</button>
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
  hideFrame.style.display = "none"; // iframe ausblenden
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## Siehe auch

- [`window.print`](/de/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }}-Ereignis
- {{ domxref("window.afterprint_event", "afterprint") }}-Ereignis
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul
