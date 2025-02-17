---
title: Drucken
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Es kann Situationen geben, in denen Ihre Website oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten höher aufgelöste Bilder für ein besseres Ergebnis verwenden.
- Sie möchten die Benutzererfahrung beim Drucken anpassen, z. B. indem eine speziell formatierte Version Ihres Inhalts vor Beginn des Druckvorgangs präsentiert wird.

Es könnte weitere Fälle geben, in denen Sie den Druckprozess verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihre Webinhalte besser drucken zu können.

## Verwenden eines Druck-Stylesheets

Fügen Sie Folgendes zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwenden von Media Queries und @page, um gedruckte Inhalte zu steuern

Sie können die CSS-At-Regel {{cssxref("@media")}} verwenden, um unterschiedliche Stile für Ihre Webseite festzulegen, wenn diese auf Papier oder als PDF gedruckt wird, im Vergleich zur Darstellung auf dem Bildschirm. Der `print`-[Medientyp](/de/docs/Web/CSS/@media#media_types) legt die Stile für gedruckte Medien fest; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) und Prioritätsregeln weiterhin gelten:

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

Sie können außerdem die {{cssxref("@page")}}-At-Regel verwenden, um verschiedene Aspekte gedruckter Seiten anzupassen, einschließlich der Abmessungen, Orientierung und Ränder der Seite. Die `@page`-At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder nur eine spezifische Teilmenge von Seiten zu beeinflussen.

## Erkennen von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)- und [`afterprint`](/de/docs/Web/API/Window/afterprint_event)-Ereignisse, um festzustellen, wann ein Druckvorgang möglicherweise stattgefunden hat. Sie können dies nutzen, um die während des Druckens angezeigte Benutzeroberfläche anzupassen (zum Beispiel das Anzeigen oder Ausblenden von Benutzeroberflächenelementen während des Druckprozesses).

## Beispiele

Hier sind einige häufige Beispiele.

### Automatisches Schließen des Fensters nach Abschluss

Im folgenden Beispiel wird das Fenster geschlossen, nachdem der Benutzer dessen Inhalt gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Drucken einer externen Seite ohne sie zu öffnen

Wenn Sie eine externe Seite drucken möchten, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)) und es automatisch entfernen, nachdem der Benutzer dessen Inhalte gedruckt hat. Im Folgenden ist ein mögliches Beispiel, das eine Datei namens `externalPage.html` drucken wird:

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
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)-Ereignis
- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)-Ereignis
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS-Paged-Media-](/de/docs/Web/CSS/CSS_paged_media)-Modul
