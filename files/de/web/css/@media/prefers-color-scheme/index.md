---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. helles oder dunkles Modus) oder eine Benutzereinstellung im Browser an.

## Eingebettete Elemente

Für SVG und iframes ermöglicht `prefers-color-scheme`, einen CSS-Stil für die SVG oder das iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements auf der Webseite festzulegen. SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) und nicht [inline in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example). Ein Beispiel zur Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>`-Elementen erlaubt. Cross-origin-Elemente sind Elemente, die von einem anderen Host als die referenzierende Seite abgerufen werden. Um mehr über SVGs zu erfahren, konsultieren Sie die [SVG-Dokumentation](/de/docs/Web/SVG), und für weitere Informationen über iframes, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Element/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer eine Oberfläche bevorzugt, die ein helles Thema hat, oder keine aktive Präferenz geäußert hat.
- `dark`
  - : Gibt an, dass der Benutzer eine Oberfläche bevorzugt, die ein dunkles Thema hat.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung ist es, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark`, um die Farben zu einer dunkleren Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu machen.

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
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber zu einem dunklen Schema basierend auf der Media-Abfrage:

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

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber zu einem hellen Schema basierend auf der Media-Abfrage:

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

Die linken Boxen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Media-Abfrage erscheinen würden. Die rechten Boxen zeigen die gleichen Themen, aber eines davon wird basierend auf dem aktiven Farbschema des Benutzers zu einer dunkleren oder helleren Variante geändert werden. Die Umrandung einer Box wird gestrichelt oder gepunktet sein, wenn sie basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das `prefers-color-scheme` Medienmerkmal in einem eingebetteten Element verwendet, um ein Farbschema von einem Elternelement zu erben. Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und deren `alt`-Attribute festzulegen. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` gemacht.

Es sollten drei Kreise zu sehen sein, wobei einer in einer anderen Farbe gezeichnet ist. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann über den Themenschalter des Systembetriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Festlegen von Styles des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements. In diesem Fall ist das Elternelement mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img />
</div>

<div style="color-scheme: light">
  <img />
</div>
<div style="color-scheme: dark">
  <img />
</div>

<!-- Embed an SVG for all <img> elements -->
<script>
  for (let img of document.querySelectorAll("img")) {
    img.alt = "circle";
    img.src =
      "data:image/svg+xml;base64," +
      window.btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <style>
          :root { color: blue }
          @media (prefers-color-scheme: dark) {
            :root { color: purple }
          }
        </style>
        <circle fill="currentColor" cx="16" cy="16" r="16"/>
      </svg>
    `);
  }
</script>
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} Eigenschaft
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Element/meta/name#color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simuliere prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
