---
title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen bevorzugt.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. Licht- oder Dunkelmodus) oder eine Benutzeragenteneinstellung an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme` das Festlegen eines CSS-Stils für das SVG oder das iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme)-Wert des übergeordneten Elements auf der Webseite.
SVGs müssen eingebettet verwendet werden (z. B. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [inline in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Inherited color scheme in embedded elements"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>`-Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host abgerufen werden als die Seite, die sie referenziert.
Um mehr über SVGs zu erfahren, lesen Sie die [SVG-Dokumentation](/de/docs/Web/SVG) und für weitere Informationen zu iframes, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer benachrichtigt hat, dass er eine Benutzeroberfläche mit einem hellen Thema bevorzugt oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer benachrichtigt hat, dass er eine Benutzeroberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu nutzen und dann `prefers-color-scheme: dark` zu verwenden, um die Farben auf eine dunklere Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann aber zu dunklen Farben überschrieben werden. Thema B verwendet dunkle Farben, kann aber zu hellen Farben überschrieben werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen hell oder dunkel sein.

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
  outline: 2px solid black;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wird aber basierend auf der Media-Query zu einem dunklen Schema wechseln:

```css
.theme-a {
  background: #ddccaa;
  color: #773311;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #775533;
    color: #ddccbb;
    outline: 5px dashed black;
  }
}
```

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wird aber basierend auf der Media-Query zu einem hellen Schema wechseln:

```css
.theme-b {
  background: #444477;
  color: #bbbbdd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bbccdd;
    color: #333344;
    outline: 5px dotted black;
  }
}
```

#### Ergebnis

Die linken Boxen zeigen Thema A und Thema B, wie sie ohne die Media-Query `prefers-color-scheme` erscheinen würden. Die rechten Boxen zeigen dieselben Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Der Umriss einer Box wird gestrichelt oder gepunktet, wenn er basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das Media-Feature `prefers-color-scheme` in einem eingebetteten Element verwendet, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und ihre `alt`-Attribute festzulegen. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Theme-Switcher des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Setzen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements.
In diesem Fall ist das übergeordnete Element mit einer `color-scheme`-CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img alt="circle" src="" />
</div>
<div class="light">
  <img alt="circle" src="" />
</div>
<div class="dark">
  <img alt="circle" src="" />
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
for (const img of document.querySelectorAll("img")) {
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
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Programmieren eines Dunkelmodus für Ihre Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
