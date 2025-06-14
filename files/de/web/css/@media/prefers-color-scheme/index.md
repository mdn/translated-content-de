---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz durch eine Einstellung des Betriebssystems (z. B. Licht- oder Dunkelmodus) oder eine Benutzereinstellung im Benutzeragenten an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme` das Setzen eines CSS-Stils für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements auf der Webseite.
SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) und nicht [in HTML eingebettet](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden.
Um mehr über SVGs zu erfahren, sehen Sie sich die [SVG-Dokumentation](/de/docs/Web/SVG) an, und für weitere Informationen über iframes finden Sie in der [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer benachrichtigt hat, dass er eine Benutzeroberfläche mit einem hellen Thema bevorzugt, oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer benachrichtigt hat, dass er eine Benutzeroberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Ein häufiger Gebrauch ist es, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu verwenden, um die Farben auf eine dunklere Variante zu überschreiben. Es ist auch möglich, dies umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann jedoch auf dunkle Farben überschrieben werden. Thema B verwendet dunkle Farben, kann aber auf helle Farben überschrieben werden. Am Ende werden bei Unterstützung von `prefers-color-scheme` durch den Browser beide Themen hell oder dunkel sein.

#### HTML

```html
<div class="box theme-a">Theme A (initial)</div>
<div class="box theme-a adaptive">Theme A (changed if dark preferred)</div>
<br />

<div class="box theme-b">Theme B (initial)</div>
<div class="box theme-b adaptive">Theme B (changed if light preferred)</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt jedoch zu einem dunklen Schema basierend auf der Media-Abfrage:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt jedoch zu einem hellen Schema basierend auf der Media-Abfrage:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### Ergebnis

Die linken Kästchen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Media-Abfrage erscheinen würden. Die rechten Kästchen zeigen dieselben Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers zu einer dunkleren oder helleren Variante geändert. Die Umrandung eines Kästchens wird gestrichelt oder punktiert sein, wenn sie basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwendet wird, um ein Farbschema von einem Elternelement zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>` Elemente und deren `alt` Attribute festzulegen. Dies würde normalerweise in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Theme-Umschalter des System-Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage ermöglicht das Setzen von Styles des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements.
In diesem Fall ist das `color-scheme` des Elternelements eine CSS-Eigenschaft eines `<div>`.

```html
<div>
  <img />
</div>
<div class="light">
  <img />
</div>
<div class="dark">
  <img />
</div>
```

```css
.light {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}
```

```js
// Embed an SVG for all <img> elements
for (let img of document.querySelectorAll("img")) {
  img.alt = "circle";
  img.src = `data:image/svg+xml;base64,${window.btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <style>
        :root { color: blue }
        @media (prefers-color-scheme: dark) {
          :root { color: purple }
        }
      </style>
      <circle fill="currentColor" cx="16" cy="16" r="16"/>
    </svg>
  `)}`;
}
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} Eigenschaft
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [Benutzer-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Dark Mode für Ihre Webseite programmieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesign Ihres Produkts und Ihrer Webseite für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Farbsc hemen ändern in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
