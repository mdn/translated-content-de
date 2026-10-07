---
title: "`will-change` CSS property"
short-title: will-change
slug: Web/CSS/Reference/Properties/will-change
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`will-change`** ermöglicht es, Animationen zu optimieren, indem sie dem Browser einen Hinweis darauf gibt, wie sich ein Element voraussichtlich ändern wird.

## Syntax

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;

/* <custom-ident> values */
will-change: transform;
will-change: opacity;

/* multiple values */
will-change: left, top;

/* Global values */
will-change: inherit;
will-change: initial;
will-change: revert;
will-change: revert-layer;
will-change: unset;
```

### Werte

Der Wert ist entweder `auto` oder besteht aus einem oder mehreren durch Kommas getrennten `<animatable-feature>`-Werten:

- `auto`
  - : Gibt an, dass der Browser seine üblichen Heuristiken und Optimierungen anwendet. Dies ist der Standardwert.

- `<animatable-feature>`
  - : Steht für einen der folgenden Werte:
    - `scroll-position`
      - : Gibt an, dass sich die Scrollposition des Elements voraussichtlich in naher Zukunft ändert. Dadurch kann der Browser die Darstellung von überlaufendem Inhalt optimieren.

    - `contents`
      - : Gibt an, dass sich der Inhalt des Elements einschließlich aller Elemente in seinem Teilbaum voraussichtlich in naher Zukunft ändert. Dadurch kann der Browser das Element weniger aggressiv zwischenspeichern.

    - {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
      - : Gibt als {{cssxref("ident")}} den Namen einer CSS-Eigenschaft an, deren Wert animiert wird oder sich voraussichtlich in naher Zukunft anderweitig ändert. Wenn das angegebene `<ident>` eine Kurzschreibweise für eine Eigenschaft bezeichnet, gilt dies für alle zugehörigen Einzeleigenschaften. Der Wert darf nicht `will-change`, `none`, `all`, `auto`, `scroll-position` oder `contents` sein.

## Beschreibung

Die Eigenschaft `will-change` gibt dem Browser einen Hinweis darauf, welche Eigenschaften voraussichtlich animiert oder anderweitig geändert werden. So kann der Browser die nötigen Optimierungen bei der Darstellung vornehmen, um Änderungen flüssiger darzustellen und {{Glossary("jank", "Ruckeln")}} zu vermeiden.

Die Eigenschaft `will-change` soll die Darstellungsleistung verbessern. Sie kann die Leistung von Elementen verbessern, die häufig neu gezeichnet oder deren Layout häufig neu berechnet wird. Das gilt auch für Elemente, die Eigenschaften wie {{cssxref("box-shadow")}} und {{cssxref("clip-path")}} für komplexe visuelle Effekte verwenden.

Wird die Eigenschaft auf ein Element angewendet, gilt ihr Wert für den gesamten Teilbaum des Elements. Damit wird angegeben, dass sich jedes seiner Nachfahrenelemente ändern kann. Ein anderer Wert als `auto` auf einem großen Bereich wie dem {{htmlelement("body")}} kann sich deshalb sogar negativ auf die Leistung einer Seite auswirken. Beschränken Sie die Verwendung dieser Eigenschaft stattdessen auf tief verschachtelte Elemente, die einen möglichst kleinen Teil des Dokuments enthalten.

> [!WARNING]
> Verwenden Sie die Eigenschaft `will-change` nur als letztes Mittel, um bestehende Leistungsprobleme zu beheben. Verwenden Sie sie nicht vorsorglich für mögliche Leistungsprobleme.

Die richtige Verwendung dieser Eigenschaft kann etwas schwierig sein. Beachten Sie die folgenden Richtlinien:

- **Wenden Sie `will-change` nicht auf zu viele Elemente an**: Der Browser versucht bereits, so viel wie möglich zu optimieren. Einige der umfangreicheren Optimierungen, die mit `will-change` verbunden sein können, beanspruchen viele Systemressourcen. Wird die Eigenschaft übermäßig verwendet, kann die Seite langsamer werden, statt an Leistung zu gewinnen.
- **Verwenden Sie die Eigenschaft sparsam**: Normalerweise entfernt der Browser Optimierungen, sobald sie nicht mehr benötigt werden, und kehrt zum Normalzustand zurück. Wenn Sie `will-change` jedoch direkt in einem Stylesheet festlegen, bedeutet dies, dass sich die betreffenden Elemente jederzeit ändern können. Der Browser behält die Optimierungen dann wesentlich länger bei, als er es sonst tun würde. Es empfiehlt sich daher, `will-change` mithilfe von Skriptcode vor und nach der Änderung ein- und auszuschalten.
- **Wenden Sie `will-change` nicht zur vorsorglichen Optimierung auf Elemente an**: Wenn Ihre Seite bereits eine gute Leistung bietet, fügen Sie Elementen die Eigenschaft `will-change` nicht bloß hinzu, um noch etwas mehr Geschwindigkeit herauszuholen. `will-change` ist als letztes Mittel zur Behebung bestehender Leistungsprobleme gedacht, nicht zur Vorbeugung möglicher Probleme. Eine übermäßige Verwendung von `will-change` erhöht den Speicherverbrauch und macht die Darstellung aufwendiger, weil sich der Browser auf mögliche Änderungen vorbereitet. Das verschlechtert die Leistung.
- **Geben Sie dem Browser genügend Zeit für die Optimierung**: Mit dieser Eigenschaft können Sie dem Browser signalisieren, welche Eigenschaften sich wahrscheinlich ändern werden. So kann er Optimierungen vornehmen, bevor die Änderung eintritt. Geben Sie dem Browser deshalb etwas Zeit dafür: Erkennen Sie eine bevorstehende Änderung möglichst frühzeitig und setzen Sie dann `will-change`.
- **Beachten Sie, dass `will-change` das visuelle Erscheinungsbild von Elementen beeinflussen kann**: Bei Verwendung mit Eigenschaftswerten, die einen [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erzeugen (z. B. `will-change: opacity`), wird der Stapelkontext bereits im Voraus erstellt.

### Animationen

Wenn Sie `will-change` zur Verbesserung von Animationen einsetzen, fügen Sie die Eigenschaft vor Beginn der Animation hinzu und nicht innerhalb der Animationsdefinitionen von {{cssxref("@keyframes")}}. Animierte Eigenschaften werden ohnehin so behandelt, als wären sie bereits in `will-change` enthalten. Daher müssen Sie sie dort nicht hinzufügen.

### Über ein Stylesheet

Für eine Anwendung, bei der sich große, komplexe Seiten per Tastendruck umblättern lassen – etwa ein Album oder eine Folienpräsentation –, kann es sinnvoll sein, `will-change` in das Stylesheet aufzunehmen. So kann der Browser den Übergang im Voraus vorbereiten und die Seiten unmittelbar nach dem Tastendruck schnell wechseln. Seien Sie jedoch vorsichtig, wenn Sie `will-change` direkt in Stylesheets verwenden: Der Browser könnte die Optimierung wesentlich länger als nötig im Speicher behalten.

```css
.slide {
  will-change: transform;
}
```

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Anwendung der Eigenschaft `will-change` in CSS.

#### CSS

Wir wenden die Eigenschaft `will-change` per CSS auf `#element` an. Damit geben wir dem Browser den Hinweis, dass die Werte der Eigenschaften {{cssxref("transform")}} und {{cssxref("opacity")}} in naher Zukunft animiert werden oder sich anderweitig ändern.

```css
#element {
  will-change: transform, opacity;
}
```

### Über ein Skript

Dieses Beispiel zeigt, wie Sie die Eigenschaft `will-change` bei Bedarf anwenden und die Optimierungen anschließend mit JavaScript wieder entfernen. Im Allgemeinen sollte `will-change` auf diese Weise verwendet werden.

#### JavaScript

Wir verwenden JavaScript, um `#element` die Eigenschaft `will-change` hinzuzufügen, wenn der Mauszeiger über das Element bewegt wird. Dazu verwenden wir das Ereignis [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event). Wenn `will-change` auf `transform, opacity` gesetzt wird, optimiert der Browser die Darstellung für Änderungen an den Eigenschaften {{cssxref("transform")}} und {{cssxref("opacity")}}. Sobald das Ereignis [`animationend`](/de/docs/Web/API/Element/animationend_event) eintritt, setzt unser Skript den Wert auf `auto`.

```js
const el = document.getElementById("element");

el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- Einzelne Transformations-Eigenschaften: {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}}
- {{cssxref("animation")}}
- Modul [CSS will change](/de/docs/Web/CSS/Guides/Will_change)
