---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz durch eine Betriebssystemeinstellung (z.B. helles oder dunkles Modus) oder eine Benutzereinstellungsoption an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme`, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des übergeordneten Elements auf der Webseite festzulegen.
SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [inline in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Vererbtes Farbschema in eingebetteten Elementen"](#vererbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host abgerufen werden als der Seite, die sie referenziert.
Um mehr über SVGs zu erfahren, siehe die [SVG-Dokumentation](/de/docs/Web/SVG) und für weitere Informationen über iframes, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Benutzerschnittstelle mit einem hellen Thema bevorzugt oder keine aktive Präferenz geäußert hat.
- `dark`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Benutzerschnittstelle mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu verwenden, um die Farben zu einer dunkleren Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Theme A verwendet helle Farben, kann jedoch zu dunklen Farben überschrieben werden. Theme B verwendet dunkle Farben, kann jedoch zu hellen Farben überschrieben werden. Letztendlich, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themes hell oder dunkel sein.

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

Theme A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber zu einem dunklen Schema basierend auf der Media Query:

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

Theme B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber zu einem hellen Schema basierend auf der Media Query:

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

Die linken Boxen zeigen Theme A und Theme B, wie sie ohne die `prefers-color-scheme` Media Query erscheinen würden. Die rechten Boxen zeigen dieselben Themes, aber eines von ihnen wird zu einer dunkleren oder helleren Variante gemäß der aktiven Farbgebung des Benutzers geändert. Der Umriss einer Box ist gestrichelt oder gepunktet, wenn er basierend auf Ihrem Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Vererbtes Farbschema in eingebetteten Elementen

Im folgenden Beispiel wird gezeigt, wie das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwendet wird, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und ihre `alt`-Attribute festzulegen. Dies würde normalerweise in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mithilfe des Themenschalters des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Festlegen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements.
In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

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
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Präferenzen für Farbgestaltung in Firefox simulieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Farbgestaltung ändern in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
