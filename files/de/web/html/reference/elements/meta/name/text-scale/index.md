---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

Der **`text-scale`**-Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attributs eines {{htmlelement("meta")}}-Elements ermöglicht es, die Seite so anzupassen, dass das initiale {{cssxref("font-size")}} des {{htmlelement("html")}}-Root-Elements im Verhältnis zu den Textskalierungen auf Betriebssystem- und Browserebene skaliert wird.

> [!WARNING]
> Wenn Sie `<meta name="text-scale" content="scale" />` auf Ihrer Website verwenden, um dieses Textskalierungsverhalten zu aktivieren, müssen Sie testen, dass es Textgrößen bis zum maximalen Textskalierungsfaktor für Ihre Zielplattformen unterstützt. Dies reicht typischerweise von 200% bis über 300% auf mobilen Plattformen, wobei einige Barrierefreiheitsfunktionen noch größere Textskalierungen ermöglichen. Stellen Sie sicher, dass Ihre Website für Benutzer, die größere oder kleinere Schriftgrößenpräferenzen auf Betriebssystemebene einstellen, nicht fehlerhaft aussieht.

## Nutzungshinweise

Ein `<meta name="text-scale">`-Element besitzt die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Gibt das {{cssxref("font-size")}}-Skalierungs-Opt-In-Verhalten an. Sein Wert ist ein Schlüsselwort, das eines der folgenden sein kann:
    - `scale`
      - : Aktiviert die Skalierung des initialen {{cssxref("font-size")}} des {{htmlelement("html")}}-Root-Elements im Verhältnis zu den Textskalierungen auf Betriebssystem- und Browserebene. Außerdem werden bestehende browserbasierte Mechanismen und Heuristiken (z. B. automatische Textgrößenanpassung auf mobilen Geräten) deaktiviert.
    - `legacy`
      - : Der Standardwert. Die Seite wird nicht in die Skalierung des `font-size` des Root-Elements im Verhältnis zu den Textskalierungen auf Betriebssystem- und Browserebene einbezogen. Dies hat die gleiche Wirkung, als ob das `<meta>`-Element überhaupt nicht enthalten wäre (Schriftpräferenzen auf Betriebssystemebene werden ignoriert).

## Beschreibung

Das `<meta name="text-scale" content="scale" />`-Element kann im {{htmlelement("head")}} eines Dokuments enthalten sein, um dem Browser zu signalisieren, dass die Seite so dimensioniert ist, dass sie sich gut an verschiedene vom Benutzer ausgewählte Schriftgrößenpräferenzen anpassen lässt; es deaktiviert zudem bestehende browserbasierte Mechanismen und Heuristiken.

Es definiert speziell den Wert des initialen `font-size` des {{htmlelement("html")}}-Root-Elements, um im Verhältnis zu benutzerdefinierten Schriftgrößeneinstellungen auf Betriebssystem- und Browserebene zu skalieren. Der {{cssxref("initial")}}-Wert des Root-{{cssxref("font-size")}} ist `medium`, welcher den Wert der [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem)-Einheit definiert. Sofern Sie die Root-`font-size` auf einen [lokalen oder root-schrift-relativen `<length>`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths)-Wert setzen oder ihren Standardwert zulassen, wird jeder nachfolgende Schlüsselbegriff (wie `medium`) oder font-relativer Längenwert (wie `em` und `rem`) im Verhältnis zu den Schriftgrößeneinstellungen des Betriebssystems oder Browsers skaliert.

Zum Beispiel, mit inkludiertem `<meta name="text-scale" content="scale">` auf der Seite, würde die folgende Regel:

```css
p {
  font-size: medium;
}
```

dazu führen, dass alle {{htmlelement("p")}}-Elemente eine skalierte Schriftgröße erhalten. Sie könnten auch `font-size` auf `initial` setzen, um den gleichen Effekt zu erzielen.

Auf mobilen Plattformen ist dies standardmäßig nicht der Fall. `<meta name="text-scale" content="scale" />` aktiviert diese Skalierung. Auf Desktop-Plattformen bewirkt dies, dass die [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)-Umgebungsvariable den Multiplikator widerspiegelt, der den Schriftgrößeneinstellungen des Browsers entspricht, abgesehen davon hat es jedoch keinen erkennbaren Vorteil.

### Nutzungssummary

Zusammengefasst sollten Sie `scale` nur setzen, wenn Ihre Anwendung für die Unterstützung der Schriftgrößenskalierung ausgelegt ist. Empfohlen wird:

1. Inkludieren Sie `<meta name="text-scale" content="scale" />` im `<head>` Ihrer Seite.
2. Überschreiben Sie nicht die initiale {{cssxref(":root")}} `font-size` mit einem [absoluten Längenwert](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) (wie `16px`).
3. Verwenden Sie nur [font-relative Einheiten](/de/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_font) wie `em`/`rem` oder Schlüsselbegriffe wie `small`, `x-large`, um Inhalte zu dimensionieren.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

Die Verwendung von `<meta name="text-scale" />`, um Dimensionen relativ zu den Textskalierungseinstellungen des Betriebssystems zu dimensionieren, wird gegenüber der [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)-Umgebungsvariable empfohlen. Sie haben ähnliche Effekte auf mobilen Geräten, aber `<meta>` bietet auch Verbesserungen für Desktop-Browser (und ist einfacher zu verwenden).

Vermeiden Sie die gleichzeitige Verwendung beider Funktionen, da die Textskalierung möglicherweise doppelt angewendet wird, wodurch kleine font-relative Dimensionen kleiner und große font-relative Dimensionen größer werden.

## Beispiele

### Demonstration der Textskalierung im Meta-Viewport

Dieses Beispiel demonstriert die Wirkung von `<meta name="text-scale" content="scale">`.

#### HTML

Wir fügen das `<meta name="text-scale" content="scale">`-Element im `<head>`-Bereich des Dokuments hinzu, sowie ein [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)-Element, um eine korrekte Anzeige auf mobilen Geräten zu gewährleisten. Außerdem enthalten wir einige Textinhalte innerhalb von {{htmlelement("p")}}-Elementen mit unterschiedlichen `class`-Attributen, um sie mit unterschiedlichen Stilen ansprechen zu können.

```html live-sample___text-scale
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size obeys the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences, even with
      text-scale set.
      <span class="text-scale">But this font size does!</span>
    </p>
  </body>
</html>
```

```html hidden live-sample___no-text-scale
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size does not obey the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences.
      <span class="text-scale">Neither does this!</span>
    </p>
  </body>
</html>
```

#### CSS

Textcontainer mit der `class` `text-scale` erhalten eine {{cssxref("font-size")}} von `1rem`, was bedeutet, dass in Browsern, die `<meta name="text-scale" content="scale">` unterstützen, dieser Text entsprechend den OS-/Browser-Schriftgrößeneinstellungen skaliert wird. Textcontainer mit der `class` `fixed` erhalten eine `font-size` von `20px`, das bedeutet, dass dieser Text auch bei geänderten Schriftgrößeneinstellungen von OS/Browser in der Größe unverändert bleibt.

```css live-sample___text-scale live-sample___no-text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Ergebnis

Diese Version hat das `<meta name="text-scale">`-Element enthalten:

{{embedlivesample("text-scale", "100%", "200")}}

Diese Version hat das `<meta name="text-scale">`-Element NICHT enthalten:

{{embedlivesample("no-text-scale", "100%", "200")}}

Testen Sie diese Beispiele in einem mobilen Browser. Ändern Sie die bevorzugte Schriftgröße in den Anzeige- oder Barrierefreiheitseinstellungen Ihres mobilen Geräts. Beachten Sie, wie im ersten Beispiel, wenn `<meta name="text-scale">` enthalten ist, die obere und untere Textzeile proportional zu den Betriebssystemeinstellungen skaliert, während die mittlere Zeile, deren `font-size` mit absoluten Einheiten gesetzt wurde, unverändert bleibt. Ohne das `<meta name="text-scale">`-Element skaliert der Text nicht proportional zu den OS-Einstellungen.

Um das Testen zu erleichtern, können Sie beide Versionen im Vollbildmodus in einem separaten Tab mithilfe der untenstehenden Links öffnen:

- {{ LiveSampleLink("text-scale", "Beispiel mit <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}
- {{ LiveSampleLink("no-text-scale", "Beispiel ohne <code>&lt;meta name=&quot;text-scale&quot;&gt;</code>") }}

### Ein auf Textskalierung reagierendes Layout

Dieses Beispiel demonstriert, dass mit `<meta name="text-scale">` auf einer Seite font-relative Größen innerhalb von {{cssxref("@media")}}-Abfragen verwendet werden können, damit mobile Browser die Breakpoints automatisch anpassen, wenn sich die Betriebssystem-Schriftgrößen ändern.

#### HTML

Wie im vorherigen Beispiel enthält unser Markup die `<meta name="text-scale">` und `<meta name="viewport">`-Elemente im `<head>`. In dieser Demo enthält der Hauptteil des Inhalts zwei Elemente — {{htmlelement("main")}} und {{htmlelement("aside")}}, die eine Hauptinhaltsspalte und eine Seitenleiste darstellen.

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>Main content</main>
    <aside>Aside content</aside>
  </body>
</html>
```

#### CSS

Standardmäßig sind der Hauptinhalt und die Seitenleiste untereinander angeordnet. Wir fügen eine {{cssxref("@media")}}-Abfrage hinzu, die die Elemente nebeneinander anordnet, wenn der Viewport breiter als `35rem` wird.

```css hidden live-sample___text-scale-layout
body {
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}
```

```css live-sample___text-scale-layout
@media (width > 35rem) {
  body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### Ergebnis

{{embedlivesample("text-scale-layout", "100%", "200")}}

Testen Sie dies in einem mobilen Browser. Sie werden sehen, dass, wenn die Schriftgröße des Betriebssystems vergrößert wird, die Breakpoint-Größe proportional dazu zunimmt. Bei größeren OS-Schriftgrößen beginnen die Hauptspalte und die Seitenleiste übereinander zu erscheinen, während sie vorher nebeneinander angezeigt wurden. Möglicherweise müssen Sie es im Querformat betrachten, um den Effekt zu sehen.

Sie können die Demo in einem separaten Tab mithilfe des untenstehenden Links öffnen, um das Testen zu erleichtern:

{{ LiveSampleLink("text-scale-layout", "Beispiel für ein reaktionsfähiges Layout") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`env(preferred-text-scale)`](/de/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
- [[meta text-scale] Unterstützung für WebView](https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3) auf chromium.googlesource.com (2026)
