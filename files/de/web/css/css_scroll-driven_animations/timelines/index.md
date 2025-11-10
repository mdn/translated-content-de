---
title: Scroll-gesteuerte Animationszeitleisten
slug: Web/CSS/CSS_scroll-driven_animations/Timelines
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Ein gebräuchliches UI-Muster beinhaltet Elemente, die animiert werden, während der Benutzer vertikal oder horizontal über eine Seite scrollt. Diese _scroll-gesteuerten Animationen_ treten in direkter Reaktion auf das Scrollen der Seite oder einen überlaufenden Scroll-Container innerhalb einer Seite auf.

Die im [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), indem sie es ermöglichen, animierte Eigenschaftswerte in {{cssxref("@keyframes")}} Animationen in Reaktion auf Benutzerinteraktionen zu definieren.

Dieser Leitfaden bietet einen Überblick über die Verwendung von CSS zum Erstellen von scroll-gesteuerten Animationszeitleisten und Animationen.

## Was ist scroll-gesteuerte Animation?

Das [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul definiert Eigenschaften, die es ermöglichen, [CSS-Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) mit dem Scrollen zu verknüpfen.

### Fortschritt der Zeitleiste

Animationen können so eingestellt werden, dass sie entlang einer _scroll-basierten Zeitleiste_ anstelle der standardmäßigen zeitbasierten Dokumenten-Zeitleiste fortschreiten, ohne JavaScript zu benötigen. CSS ermöglicht es uns, [zu definieren, welche Animationszeitleiste](#animationszeitleisten) verwendet werden soll, einschließlich der Animation von Elementen durch das Scrollen eines scrollbaren Elements statt durch den Zeitverlauf.

### Leistungsverbesserungen

CSS-Scroll-gesteuerte Animationen sind leistungsfähig. JavaScript-Scroll-gesteuerte Animationen erfordern [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis-Listener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Objekte im {{Glossary("main_thread", "Hauptthread")}}, um Elemente über den {{Glossary("Scroll_container#scrollport", "scrollport")}} zu verfolgen. Jedes Mal, wenn Sie sich auf den Hauptthread verlassen, um Effekte mit JavaScript zu rendern, laufen Sie Gefahr, den Hauptthread zu blockieren, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung oder {{Glossary("jank", "Ruckeln")}} führen kann.

## Grundlagen

Scroll-gesteuerte Animationen bauen auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) auf. Bevor Sie scroll-gesteuerte Animationen erstellen, müssen Sie ein Verständnis von CSS {{cssxref("@keyframes")}} Animationen haben. Siehe den [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using), um mehr zu erfahren.

In CSS werden Animationen erstellt, indem Keyframe-Animationen mit einem Element über die {{cssxref("animation-name")}} Eigenschaft (oder den {{cssxref("animation")}} Kurzbefehl) verbunden werden. Standardmäßig laufen Animationen auf der standardmäßigen Dokumenten-Zeitleiste ab, indem sie sich von der `from` Keyframe zur `to` Keyframe bewegen, während die Zeit vergeht, wobei die Animation so lange dauert wie die im Wert der {{cssxref("animation-duration")}} Eigenschaft definierte Zeit. Wenn Sie auf der standardmäßigen Dokumenten-Zeitleiste eingestellt sind, spielen die Animationen bis zum Abschluss, es sei denn, sie werden daran gehindert, z. B. indem der {{cssxref("animation-play-state")}} auf `paused` gesetzt wird oder der `animation-name` vom Element entfernt wird.

Scroll-gesteuerte Animationen sind CSS-Animationen, die nicht auf der standardmäßigen [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) laufen. Stattdessen laufen sie auf einer Scroll-Fortschritt- oder Sichtbarkeits-Fortschritt-Zeitleiste, die durch das Scrollen der Inhalte eines Elements angetrieben wird. Es besteht eine direkte Verbindung zwischen der Scrollaktivität des Benutzers und dem Fortschritt der Animation entlang der `@keyframe` Keyframes. Wenn der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch die Keyframe-Fortschreitung. Wenn das Scrollen pausiert wird, pausiert auch die Animation, als ob `animation-play-state` auf `pause` gesetzt wäre.

## Animationszeitleisten

Die {{cssxref("animation-timeline")}} Eigenschaft, die im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) definiert ist, wird verwendet, um die Zeitleiste für die Animation festzulegen.

Das [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul definiert Funktionen zum Setzen der `animation-timeline` als Scroll-Fortschritt- oder Sichtbarkeits-Fortschritt-Zeitleiste. Sie können explizit [ein Element als Zeitleisten-Controller benennen](#benannte_scroll-fortschritt-zeitleisten) mithilfe der `scroll-timeline-*` und `view-timeline-*` Eigenschaften und diesen Namen dann als `animation-timeline` eines untergeordneten Elements festlegen. Sie können auch _anonyme Scroll-Fortschritt-Zeitleisten_ und _anonyme Sichtbarkeits-Fortschritt-Zeitleisten_ mit den Funktionen [`scroll()`](#scroll-fortschritt-zeitleisten) und [`view()`](#sichtbarkeits-fortschritt-zeitleisten)) definieren.

Alternativ kann die `animation-timeline` Eigenschaft verwendet werden, um explizit anzugeben, dass die [standardmäßige Dokumenten-Zeitleiste verwendet werden soll](#regular_css_animations_default_document_timeline) oder um zu spezifizieren, dass die [Animation keine Zeitleiste hat](#removing_an_animations_timeline), und daher überhaupt nicht stattfinden sollte.

### Reguläre CSS-Animationen: standardmäßige Dokumenten-Zeitleiste

Das explizite Setzen von `animation-timeline` auf `auto` oder das Weglassen der Eigenschaft und das Zulassen des Standardwerts `auto` setzt die Zeitleiste auf die standardmäßige Dokumenten-Zeitleiste. Wenn dieser Standardwert gesetzt ist, wird der Fortschritt der Animation durch die {{cssxref("animation-duration")}}, die {{cssxref("animation-delay")}} und die verstrichene Zeit seit der Zuordnung der Animation mit dem Element über die `animation-name` Eigenschaft bestimmt. Die zeitbasierte Dokumenten-Zeitleiste ist die Zeitleiste, die traditionell mit CSS-Animationen verbunden ist.

```css live-sample___regular
:checked ~ .container > .item {
  animation-name: action;
  animation-duration: 3s;
  animation-delay: 500ms;
  animation-timeline: auto;
}
```

Wir erstellen eine Rotations-Keyframe-Animation namens `action`:

```css live-sample___regular live-sample___named_scroll live-sample___anon_scroll
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 765deg;
  }
}
```

```html hidden live-sample___regular
<input type="checkbox" id="i" />
<label for="i">
  Check to apply the animation. Uncheck to remove the animation
</label>
<div class="container">
  <span class="item"></span>
</div>
```

```css hidden live-sample___regular
div {
  width: 400px;
  height: 100px;
  border: 1px solid;
  background-color: palegoldenrod;
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

Wenn das Kontrollkästchen aktiviert ist, wird die `action` Animation auf das Element angewendet. Wenn es deaktiviert ist, wird die Animation nicht auf das `<div>` angewendet.

{{EmbedLiveSample("regular", "100%", "150")}}

Versuchen Sie, das Kontrollkästchen zu aktivieren. Während der halben Sekunde Animationsverzögerung passiert nichts. Sobald die Animation startet, springt die Box zu einer 45-Grad-Drehung, und dann dauert es 3 Sekunden, um zusätzlich 720 Grad oder zwei vollständige Umdrehungen zu drehen. Nach insgesamt dreieinhalb Sekunden endet die Animation, und das `<div>` kehrt in seinen ursprünglichen nicht gedrehten Zustand zurück.

> [!NOTE]
> Die `animation-timeline` wird durch die {{cssxref("animation")}} Kurzschreibweise auf den Standardwert `auto` zurückgesetzt, kann jedoch nicht mit der Kurzschreibweise festgelegt werden. Daher sollten Sie beim Erstellen von scroll-gesteuerten Animationen die `animation-timeline` immer nach allen `animation` Kurzschreibungen deklarieren, um den gewünschten Effekt zu erzielen.

## Scroll-Fortschritt-Zeitleisten

Bei einer _Scroll-Fortschritt-Zeitleiste_ schreitet die Zeitleiste basierend auf dem Scrollen des scrollbaren Elements (_scroller_) von oben nach unten (oder von links nach rechts) und zurück voran. Standardmäßig wird die Position im Scrollbereich in einen Prozentsatz des Fortschritts umgewandelt - `0%` am Anfang und `100%` am Ende. <!--Dieser [Animationsbereich kann über die {{cssxref("animation-range")}} Eigenschaften gesteuert werden](#controlling_the_animation_range).-->

Um eine Scroll-Fortschritt-Zeitleiste zu erstellen, muss der `animation-timeline` Wert auf den Scroller verweisen, der benannt oder anonym sein kann.

### Benannte Scroll-Fortschritt-Zeitleisten

Eine _benannte Scroll-Fortschritt-Zeitleiste_ ist eine, bei der der Scroller explizit über die {{cssxref("scroll-timeline-name")}} Eigenschaft (oder den {{cssxref("scroll-timeline")}} Kurzbefehl) benannt wird. Der Name ist ein {{cssxref("dashed-ident")}}. Der Scroller wird durch Angabe seines `scroll-timeline-name` als Wert der `animation-timeline` Eigenschaft des zu animierenden Elements verbunden.

Unser HTML enthält drei Elemente: das `item`, das wir animieren werden; sein `container`, den wir scrollen werden; und den Scroller. Der `container` muss groß genug sein, um seinen `scroller`-Eltern zu überlaufen: Wenn kein Scrollen vorhanden ist, gibt es keine Scroll-Zeitleiste.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir stellen einige grundlegende Stile bereit. Die wichtigen umfassen das Setzen einer Höhe auf den Container, die größer ist als der Scroller, und dann das Setzen des Überlaufs, um das Scrollen zu ermöglichen:

```css live-sample___named_scroll live-sample___anon_scroll
.scroller {
  width: 400px;
  height: 100px;
  overflow: scroll;
}
.container {
  height: 200px;
}
```

Das Setzen einer `animation-timeline` auf das animierte Element, die mit dem `scroll-timeline-name` eines Vorfahren übereinstimmt, ist das, was die benannte Scroll-Fortschritt-Zeitleiste erstellt. Wir müssen auch eine Animation einbeziehen, indem wir den Wert der `animation-name` Komponente der {{cssxref("animation")}} Kurzschreibweise auf den {{cssxref("custom-ident")}} Namen unserer Keyframe-Animation setzen:

```css live-sample___named_scroll
.scroller {
  scroll-timeline-name: --rotate;
}
.item {
  animation: action 1ms linear;
  animation-timeline: --rotate;
}
```

```css hidden live-sample___named_scroll live-sample___anon_scroll
main {
  border: 1px solid;
  background-color: palegoldenrod;
}
div {
  position: relative;
}
span {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  position: absolute;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

In diesem Fall haben wir kein Kontrollkästchen, da der Fortschritt der `action` Animation durch das Scrollen des überlaufenden Scrollers gesteuert wird, der im Gegensatz zur Zeit nicht abläuft.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Bevor ein Scrollen erfolgt, befindet sich die Position des Containers oben im Scroller, und die Animation befindet sich bei der 0%-Keyframe. Versuchen Sie, nach unten zu scrollen. Während Sie scrollen, schreitet die Animation durch die Zeitleiste voran und dreht sich um weitere 720 Grad. Wenn Sie nicht mehr scrollen können, befindet sich der Fortschritt der Animation bei der 100% oder `to` Keyframe. Das animierte Element kehrt nicht zu seiner Standardrotation zurück, es sei denn, der Scroller wird wieder nach oben gescrollt.

#### Animationsdauer

Vielleicht haben Sie bemerkt, dass die {{cssxref("animation-duration")}} Komponente des `animation` Kurzbefehl auf `1ms` gesetzt wurde. Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) wirkt sich ein `animation-duration` Wert nicht auf die Dauer der Animation aus und sollte nicht notwendig sein. Allerdings können sich Dauern auf nichtlineare Sichtbarkeits-Fortschritt-Animationszeitleisten auswirken, und Firefox erfordert eine nicht-nullwertige `animation-duration`, um eine Animation auf ein Element anzuwenden. Aus diesen Gründen ist es gängige Praxis, die `animation-duration` auf `1ms` zu setzen.

Das Setzen von `animation-duration: 1ms` stellt sicher, dass die Animation in Firefox funktioniert, der Animationseffekt in allen Browsern konsistent ist, und die Animation versteckt ist, wenn ein Browser keine Sichtbarkeits-Fortschritt-Animationszeitleisten unterstützt. Wenn der Browser Schlüsselbildanimationen unterstützt, ist die Animation für den Benutzer nicht sichtbar. Die Animation findet jedoch trotzdem statt, und Animationsereignisse werden ausgelöst.

### Anonyme Scroll-Fortschritt-Zeitleisten

Es ist nicht erforderlich, Ihre Scroll-Fortschritt-Zeitleiste zu benennen. Stattdessen können Sie eine _anonyme Scroll-Fortschritt-Zeitleiste_ mit der Animation verknüpfen. In diesem Fall wird die `animation-timeline` des zu animierenden Elements auf eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion gesetzt. Die Funktion wählt den Scroller aus, der die Scroll-Fortschritt-Animationszeitleiste bereitstellt, und die Scrollachse, die basierend auf den optionalen Argumenten, die Sie übergeben, verwendet werden soll. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller) Schlüsselwort, das die Beziehung des Scroller-Elements zum aktuellen Element definiert (`nearest`, `root` oder `self`). Der andere ist der Scrollbalken-`<axis>` Wert (`block`, `inline`, `y` oder `x`).

Dieses Beispiel verwendet dieselben CSS wie das vorherige Beispiel, außer für die `animation-timeline`, die auf eine `Scroll()` Funktion gesetzt ist. Wir überschreiben auch die Größe des Containers, um die Scrollrichtung zu ändern:

```css live-sample___anon_scroll
.item {
  animation: action 1ms linear;
  animation-timeline: scroll(nearest inline);
}
.container {
  inline-size: 800px;
  block-size: 100%;
}
```

{{EmbedLiveSample("anon_scroll", "100%", "150")}}

Wir setzen eine {{cssxref("inline-size")}} auf den Container, damit er in der Inline-Richtung überläuft, und setzen die {{cssxref("block-size")}} auf `100%`, damit er nicht mehr in der Blockrichtung überläuft. Versuchen Sie, in der Inline-Richtung zu scrollen.

## Sichtbarkeits-Fortschritt-Zeitleisten

Sie können auch eine Animation basierend auf der Änderung der Sichtbarkeit eines Elements innerhalb eines Scrollers vorantreiben — dies wird über _Sichtbarkeits-Fortschritt-Zeitleisten_ erreicht. Anstatt die Scrolloffset eines Scrollcontainers zu verfolgen, verfolgen Sichtbarkeits-Fortschritt-Zeitleisten die relative Position eines Elements, das als _Subjekt_ bezeichnet wird, innerhalb eines Scrollports. Der Fortschritt der Keyframes einer Animation basiert auf der _Sichtbarkeit_ des Subjekts innerhalb des Scrollers. Im Gegensatz zu Scroll-Fortschritt-Zeitleisten ist es bei Sichtbarkeits-Fortschritt-Zeitleisten nicht möglich, den Scroller anzugeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Vorfahren-Scrollers verfolgt.

Eine Sichtbarkeits-Fortschritt-Zeitleistenanimation tritt nur auf, wenn das Element innerhalb seines Scrollports sichtbar ist. Der Fortschritt der Zeitleiste beginnt bei `0%`, wenn das verfolgte Subjekt beginnt, mit dem Scrollport an der Block- oder Inline-Endkante zu schneiden. Die `100%` tritt auf, wenn das Subjekt den Scrollport an der Block- oder Inline-Startkante verlässt.

Da die `100%` im Allgemeinen erreicht wird, wenn das Element den Viewport verlässt, möchten Sie wahrscheinlich den endgültigen Effekt Ihrer Animation in einem Keyframe-Block festlegen, der weit vor dem Ende der Animation liegt. Sie können Ihren abgeschlossenen Effekt innerhalb des `20%`, `50%` oder `80%` Keyframe-Blocks anstelle der Verwendung des `to` oder `100%` Keyframes festlegen, um sicherzustellen, dass das Element mit der Animation fertig ist, während es noch im Blickfeld ist.

Mit Sichtbarkeits-Fortschritt-Zeitleisten können Sie den Sichtbarkeitsbereich des Sichtbarkeits-Fortschritts anpassen.
Verwenden Sie {{cssxref("view-timeline-inset")}}, einen Teil der {{cssxref("view-timeline")}} Kurzform, um anzupassen, wann das Subjekt als in Sicht betrachtet wird. Der Standardwert ist `auto`. Die Wirkung eines nicht `auto`-Wert-Insets ist so, als würden Sie die Kanten des Scrollport verschieben: ein positiver Inset-Wert erzeugt eine nach innen gerichtete Anpassung, und ein negativer Wert eine nach außen gerichtete Anpassung.

Ähnlich wie bei Scroll-Fortschritt-Zeitleisten kann die Sichtbarkeits-Fortschritt-Zeitleiste benannt oder anonym sein.

### Benannte Sichtbarkeits-Fortschritt-Zeitleiste

Eine _benannte Sichtbarkeits-Fortschritt-Zeitleiste_ ist eine, bei der das Subjekt explizit über die {{cssxref("view-timeline-name")}} Eigenschaft benannt wird, eine Komponente der `view-timeline` Kurzform. Der `<dashed-ident>` Name wird dann als Wert der `animation-timeline` Eigenschaft mit dem zu animierenden Element verknüpft.

Bei benannten Sichtbarkeits-Fortschritt-Zeitleisten muss das zu animierende Element nicht mit dem Subjekt identisch sein. Mit anderen Worten, das Element, das die Zeitleiste steuert, muss nicht identisch mit dem Element sein, das animiert wird. Das bedeutet, dass Sie ein Element basierend auf der Bewegung eines anderen Elements innerhalb seines scrollbaren Containers animieren können.

Hier verwenden wir die {{cssxref("view-timeline-name")}} Eigenschaft, um ein Element zu benennen und das Element selbst als Quelle einer Sichtbarkeits-Fortschritt-Zeitleiste zu identifizieren. Dann setzen wir diesen Namen als Wert der `animation-timeline` Eigenschaft.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --aName;
  animation-timeline: --aName;
}
```

Wir haben die Animation **vor** der Animationszeitleiste angewendet, da die `animation` die `animation-timeline` auf `auto` zurücksetzt.

Die Animation ist etwas anders als in den vorherigen Beispielen, da der Dreh-Effekt bei `20%` beginnt und bei `80%` der Animation endet; das bedeutet, dass das Element nicht aktiv dreht, wenn es zum ersten Mal ins Blickfeld kommt, und aufhört, sich zu drehen, bevor es vollständig aus dem Blickfeld ist.

```css live-sample___named_view live-sample___anon_view
@keyframes action {
  from,
  20% {
    rotate: 45deg;
  }
  80%,
  to {
    rotate: 720deg;
  }
}
```

```css hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
.scroller {
  width: 400px;
  height: 200px;
  line-height: 2;
  overflow: scroll;
  border: 1px solid;
  background-color: palegoldenrod;
}
.item {
  --size: 50px;
  height: var(--size);
  width: var(--size);
  background-color: magenta;
  border: 1px solid;
  left: calc(50% - (var(--size) / 2));
  top: calc(50% - (var(--size) / 2));
}
```

```html hidden live-sample___named_view live-sample___anon_view live-sample___anon_view_args
<main class="scroller">
  <p>Scroll down to view the animation</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <div class="item"></div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Scroll up to view the animation</p>
</main>
```

{{EmbedLiveSample("named_view", "100%", "250")}}

Scrollen Sie das Element ins Blickfeld. Beachten Sie, dass das Element durch die `@keyframes` Animation animiert wird, während es durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt.

### Anonyme Sichtbarkeits-Fortschritt-Zeitleiste: die `view()` Funktion

Alternativ kann eine {{cssxref("animation-timeline/view", "view()")}} Funktion als Wert der `animation-timeline` Eigenschaft gesetzt werden, um anzugeben, dass die Animationszeitleiste eines Elements eine _anonyme Sichtbarkeits-Fortschritt-Zeitleiste_ ist. Dies führt dazu, dass das Element basierend auf seiner Position innerhalb seines nächstgelegenen Elternscroller animiert wird.

Die `view()` Funktion erstellt eine Sichtbarkeitszeitleiste. Sie hängen die Zeitleiste an das Element, das Sie animieren möchten, mit der `animation-timeline` Eigenschaft an. Die Funktion erstellt eine Sichtbarkeitszeitleiste für jedes Element, das vom Selektor ausgewählt wurde.

In diesem Beispiel definieren wir wieder die `animation` vor der `animation-timeline`, sodass die Zeitleiste nicht zurückgesetzt wird. Wir geben dann eine `view()` Funktion ohne Argumente ein. Wir geben keinen Scroller an, da die Sichtbarkeit des Subjekts definitionsgemäß durch seinen nächstgelegenen Vorfahren-Scroller verfolgt wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der `view()` Funktion

Die `view()` Funktion nimmt bis zu drei optionale Werte als Argumente an:

- Null oder ein `<axis>` Parameter. Wenn gesetzt, wird damit die Scrollachse angegeben, entlang derer die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder null, ein oder zwei {{cssxref("length-percentage")}} Inset-Werte. Wenn gesetzt, geben diese Werte Versätze für den Scrollport-Start und/oder -Ende an.

Das Deklarieren von `view()` entspricht `view(block auto)`, was `block` als die Achse des Elternelements festlegt, das die Zeitleiste liefert, und das {{cssxref("scroll-padding")}}, das generell auf `0` voreingestellt ist, als die Einsätze innerhalb des sichtbaren Bereichs, an denen die Animation beginnt und endet.

Die Funktion setzt die Werte der {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} Eigenschaften.

Die {{cssxref("view-timeline-inset")}} Argumente geben Einsätze (wenn positiv) oder Ausnahmen (wenn negativ) an, die den Start und das Ende des Scrollports anpassen. Sie werden verwendet, um die Scrollpositionen zu bestimmen, an denen das Element als "in Sicht" betrachtet wird, was die Länge der Animationszeitleiste bestimmt. Mit anderen Worten, anstelle des Beginns an der Startkante und Endes an der Endkante des Scrollports, erfolgt die Animation am Beginn und Ende der einsatzangepassten Ansicht.

Anders als die `scroll()` Funktion der Scroll-Zeitleiste gibt es kein `<scroller>` Argument in der `view()` Funktion, da die Sichtbarkeitszeitleiste immer das Subjekt innerhalb seines nächstgelegenen Vorfahren-Scrollcontainers verfolgt.

In diesem Beispiel, da wir Inset-Werte verwenden, können wir die `from` und `to` Keyframe-Selektoren verwenden.

```css live-sample___anon_view_args
@keyframes action {
  from {
    rotate: 45deg;
  }
  to {
    rotate: 720deg;
  }
}

.item {
  animation: action 1ms linear;
  animation-timeline: view(block 20% 20%);
}
```

{{EmbedLiveSample("anon_view_args", "100%", "250")}}

## Barrierefreiheitsbedenken

Wie bei allen Animationen und Übergängen sollten Sie immer die Präferenzen eines Benutzers im Hinblick auf [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) berücksichtigen.

### Entfernen einer Animationszeitleiste

Das Setzen von `animation-timeline: none` trennt das Element von allen Animationszeitleisten, einschließlich der standardmäßig zeitbasierten Dokumenten-Zeitleiste, was bedeutet, dass das Element nicht animiert wird. Während einige Animationen notwendig sein können, können Sie Animationen basierend auf den `prefers-reduced-motion` Einstellungen des Benutzers entfernen mit:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da die `animation` Kurzschreibweise die `animation-timeline` auf `auto` setzt, verwenden Sie einen Selektor mit genügend Spezifität, um sicherzustellen, dass Ihre `animation-timeline` nicht von Ihren `animation` Kurzschreibungen überschrieben wird.

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
