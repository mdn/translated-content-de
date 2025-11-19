---
title: Scrollgetriebene Animationen Zeitachsen
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

Ein häufiges UI-Muster beinhaltet Elemente, die sich animieren, wenn der Benutzer vertikal oder horizontal über eine Seite scrollt. Diese _scrollgetriebenen Animationen_ treten in direkter Reaktion auf das Scrollen der Seite oder eines überlaufenden Scroll-Containers innerhalb einer Seite auf.

Die im Modul [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), indem sie die Animation von Eigenschaftswerten ermöglichen, die in {{cssxref("@keyframes")}} Animationen definiert sind, und auf Benutzerinteraktionen reagieren.

Dieser Leitfaden gibt einen Überblick über die Verwendung von CSS zur Erstellung von scrollgetriebenen Animationszeitachsen und Animationen.

## Was ist scrollgetriebene Animation?

Das Modul [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Eigenschaften, die es ermöglichen, [CSS-Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) mit dem Scrollen zu verknüpfen.

### Zeitachsenfortschritt

Animationen können so eingestellt werden, dass sie entlang einer _scrollbasierten Zeitachse_ anstelle der standardmäßigen zeitbasierten Dokument-Zeitachse fortschreiten, ohne dass JavaScript benötigt wird. CSS ermöglicht es uns, [die zu verwendende Animationszeitachse zu definieren](#animationszeitachsen), einschließlich der Animation von Elementen durch das Scrollen eines scrollbaren Elements anstelle des Zeitverlaufs.

### Leistungsverbesserungen

CSS scrollgetriebene Animationen sind leistungsstark. JavaScript scrollgetriebene Animationen erfordern [`scroll`](/de/docs/Web/API/Document/scroll_event) Eventlistener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Objekte im {{Glossary("main_thread", "Haupt-Thread")}}, um Elemente über das {{Glossary("Scroll_container#scrollport", "Scrollport")}} hinweg zu verfolgen. Jedes Mal, wenn Sie sich auf den Haupt-Thread verlassen, um Effekte mit JavaScript zu rendern, besteht das Risiko, den Haupt-Thread zu blockieren, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung oder {{Glossary("jank", "Störungen")}} führen kann.

## Grundlagen

Scrollgetriebene Animationen bauen auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) auf. Bevor Sie scrollgetriebene Animationen erstellen, müssen Sie ein Verständnis von CSS {{cssxref("@keyframes")}} Animationen haben. Siehe den [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using), um mehr zu erfahren.

In CSS werden Animationen erstellt, indem Keyframe-Animationen mit einem Element mittels der {{cssxref("animation-name")}} Eigenschaft (oder der {{cssxref("animation")}} Kurzform) verknüpft werden. Standardmäßig laufen Animationen auf der standardmäßigen Dokumentzeitachse, von der `from` Keyframe bis zur `to` Keyframe, während die Zeit verstreicht, wobei die Animation so lange dauert, wie die durch den Wert der Eigenschaft {{cssxref("animation-duration")}} definierte Zeit. Wenn auf der standardmäßigen Dokumentzeitachse festgelegt, laufen Animationen bis zum Abschluss ab, es sei denn, sie werden daran gehindert, z. B. indem die {{cssxref("animation-play-state")}} auf `paused` gesetzt oder das `animation-name` vom Element entfernt wird.

Scrollgetriebene Animationen sind CSS-Animationen, die nicht auf der standardmäßigen [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) laufen. Stattdessen laufen sie auf einer Scroll-Fortschritts- oder View-Fortschritts-Zeitachse, die durch das Scrollen der Inhaltselemente eines Elements angetrieben wird. Es besteht eine direkte Verbindung zwischen der Scroll-Aktion des Benutzers und dem Fortschritt der Animation entlang der `@keyframe` Keyframes. Wenn der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch den Keyframe-Fortschritt. Wird das Scrollen angehalten, pausiert die Animation, als ob `animation-play-state` auf `pause` gesetzt wäre.

## Animationszeitachsen

Die im Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) definierte Eigenschaft {{cssxref("animation-timeline")}} wird verwendet, um die Zeitachse, die für die Animation verwendet wird, zu setzen.

Das Modul [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Funktionen zum Festlegen der `animation-timeline` als Scroll-Fortschritts- oder View-Fortschritts-Zeitachse. Sie können ein Element ausdrücklich [als Zeitstrahl-Controller benennen](#benannte_scroll-fortschritts-zeitachsen), indem Sie die `scroll-timeline-*` und `view-timeline-*` Eigenschaften verwenden und diesen Namen dann als die `animation-timeline` eines untergeordneten Elements festlegen. Sie können auch _anonyme Scroll-Fortschritts-Zeitachsen_ und _anonyme View-Fortschritts-Zeitachsen_ mithilfe der Funktionen [`scroll()`](#scroll-fortschritts-zeitachsen) und [`view()`](#view-fortschritts-zeitachsen) definieren.

Alternativ kann die `animation-timeline` Eigenschaft verwendet werden, um explizit anzugeben, dass die [standardmäßige Dokumentzeitachse verwendet wird](#regular_css_animations_default_document_timeline) oder um anzugeben, dass [die Animation keine Zeitleiste hat](#removing_an_animations_timeline) und daher überhaupt nicht auftreten sollte.

### Reguläre CSS-Animationen: standardmäßige Dokumentzeitachse

Das explizite Setzen von `animation-timeline` auf `auto` oder das Weglassen der Eigenschaft und das zulassen, dass sie standardmäßig auf `auto` eingestellt wird, setzt die Zeitachse auf die standardmäßige Dokumentzeitachse. Wenn auf diesen Standardwert gesetzt, wird der Fortschritt der Animation durch die {{cssxref("animation-duration")}}, die {{cssxref("animation-delay")}}, und die seit der Animation mit dem Element verbundenen Zeit mittels der `animation-name` Eigenschaft bestimmt. Die zeitbasierte Dokumentzeitachse ist die Zeitachse, die traditionell mit CSS-Animationen verbunden ist.

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

Versuchen Sie, das Kontrollkästchen zu aktivieren. Während der halben Sekunde Animationsverzögerung passiert nichts. Wenn die Animation dann beginnt, springt das Kästchen in eine 45-Grad-Drehung und benötigt dann 3 Sekunden, um zusätzliche 720 Grad oder zwei zusätzliche volle Umdrehungen zu drehen. Nach insgesamt dreieinhalb Sekunden endet die Animation und das `<div>` kehrt in seinen standardmäßigen nicht-rotierenden Zustand zurück.

> [!NOTE]
> Die `animation-timeline` wird auf den Standardwert `auto` durch die {{cssxref("animation")}} Kurzform zurückgesetzt, kann jedoch nicht mit der Kurzform gesetzt werden. Daher erklären Sie bei der Erstellung von scrollgetriebenen Animationen immer die `animation-timeline` nach allen `animation` Kurzform Deklarationen, um den gewünschten Effekt zu erzielen.

## Scroll-Fortschritts-Zeitachsen

Bei _Scroll-Fortschritts-Zeitachsen_ schreitet die Zeitachse basierend auf dem Scrollen des scrollbaren Elements (_Scroller_) von oben nach unten (oder links nach rechts) und wieder zurück fort. Standardmäßig wird die Position im Scroll-Bereich in einen Fortschritt in Prozent umgerechnet - `0%` am Anfang und `100%` am Ende. <!--Dieser [Animationsbereich kann gesteuert werden](#controlling_the_animation_range) durch die {{cssxref("animation-range")}} Eigenschaften.-->

Um eine Scroll-Fortschritts-Zeitachse zu erstellen, muss der `animation-timeline` Wert den Scroller referenzieren, der benannt oder anonym sein kann.

### Benannte Scroll-Fortschritts-Zeitachsen

Eine _benannte Scroll-Fortschritts-Zeitachse_ ist, wenn der Scroller ausdrücklich mit der Eigenschaft {{cssxref("scroll-timeline-name")}} (oder der Kurzform {{cssxref("scroll-timeline")}}) benannt wird. Der Name ist eine {{cssxref("dashed-ident")}}. Der Scroller wird mit dem zu animierenden Element verknüpft, indem sein `scroll-timeline-name` als Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.

Unser HTML enthält drei Elemente: das `item`, das wir animieren werden; seinen `container`, den wir scrollen werden; und den Scroller. Der `container` muss groß genug sein, um seinen `scroller` Elternteil zu überlaufen: Wenn es keinen Scroll gibt, gibt es keine Scroll-Zeitachse.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir bieten einige grundlegende Stile an. Die wichtigen beinhalten das Setzen einer Höhe am Container, die größer ist als der Scroller und dann das Setzen des Überlaufs, um Scrollen zu ermöglichen:

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

Das Setzen einer `animation-timeline` am animierten Element, die dem `scroll-timeline-name` eines Vorfahrelements entspricht, ist das, was die benannte Scroll-Fortschritts-Zeitachse erstellt. Wir müssen auch eine Animation einfügen, die wir durch Setzen des Wertes der `animation-name` Komponente der {{cssxref("animation")}} Kurzform auf den {{cssxref("custom-ident")}} Namen unserer Keyframe-Animation tun:

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

Bevor ein Scrollen erfolgt, befindet sich die Position des Containers oben im Scroller und die Animation befindet sich im 0% Keyframe. Versuchen Sie nach unten zu scrollen. Wenn Sie scrollen, schreitet die Animation durch die Zeitachse, indem sie zusätzliche 720 Grad dreht. Wenn Sie nicht mehr scrollen können, ist der Fortschritt der Animation beim 100% oder `to` Keyframe angelangt. Das animierte Element kehrt nicht in seine Standardrotation zurück, es sei denn, der Scroller wird zurück nach oben gescrollt.

#### Animationsdauer

Sie haben vielleicht bemerkt, dass die {{cssxref("animation-duration")}} Komponente der `animation` Kurzform auf `1ms` gesetzt war. Beim Erstellen von [CSS scrollgetriebenen Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) beeinflusst das Angeben eines `animation-duration` Werts nicht die Dauer der Animation und sollte nicht erforderlich sein. Dennoch können Dauerzeiten nicht-lineare View-Fortschritts-Animationszeitachsen beeinflussen und Firefox erfordert eine nicht-null-`animation-duration` um eine Animation auf ein Element anzuwenden. Aus diesen Gründen ist es gängige Praxis, `animation-duration` auf `1ms` zu setzen.

Das Setzen von `animation-duration: 1ms` stellt sicher, dass die Animation in Firefox funktioniert, dass der Animationseffekt in allen Browsern konsistent ist und dass die Animation verborgen ist, wenn ein Browser keine View-Fortschritts-Animationszeitachsen unterstützt. Wenn der Browser Keyframe-Animationen unterstützt, ist die Animation für den Benutzer nicht sichtbar. Die Animation findet jedoch trotzdem statt und Animation Events werden ausgelöst.

### Anonyme Scroll-Fortschritts-Zeitachsen

Sie müssen Ihrer Scroll-Fortschritts-Zeitachse keinen Namen geben. Stattdessen können Sie eine _anonyme Scroll-Fortschritts-Zeitachse_ mit der Animation verknüpfen. In diesem Fall wird die `animation-timeline` des zu animierenden Elements auf eine {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion gesetzt. Die Funktion wählt den Scroller aus, der die Scroll-Fortschritts-Zeitachse liefert, und die Scrollachse basierend auf den optionalen Argumenten, die Sie an sie übergeben, aus. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller) Schlüsselwort, das die Beziehung des Scroller-Elements zum aktuellen Element definiert (`nearest`, `root`, oder `self`). Der andere ist der Wert [`<axis>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis) der Bildlaufleiste (`block`, `inline`, `y`, oder `x`).

Dieses Beispiel verwendet denselben CSS wie das vorherige Beispiel, außer für die `animation-timeline`, die wir auf eine `scroll()` Funktion setzen. Wir überschreiben auch die Größe des Containers, um die Richtung des Scrollens zu ändern:

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

Wir setzen eine {{cssxref("inline-size")}} auf den Container, sodass er in der Inline-Richtung überläuft, und setzen die {{cssxref("block-size")}} auf `100%`, sodass sie nicht mehr in der Blockrichtung überläuft. Versuchen Sie in der Inline-Richtung zu scrollen.

## View-Fortschritts-Zeitachsen

Sie können auch eine Animation basierend auf der Sichtbarkeitsänderung eines Elements innerhalb eines Scrollers fortschreiten lassen — dies geschieht über _View-Fortschritts-Zeitachsen_. Anstatt den Scroll-Versatz eines Scroll-Containers zu verfolgen, verfolgen View-Fortschritts-Zeitachsen die relative Position eines Elements, genannt das _Subjekt_, innerhalb eines Scrollports. Der Fortschritt der Keyframe-Animation basiert auf der _Sichtbarkeit_ des Subjekts innerhalb des Scrollers. Im Gegensatz zu Scroll-Fortschritts-Zeitachsen, bei denen die Scroller explizit angegeben werden können, wird bei View-Fortschritts-Zeitachsen die Sichtbarkeit des Subjekts immer innerhalb seines nächsten Vorfahren-Scrollers verfolgt.

Eine View-Fortschritts-Zeitachse Animation tritt nur auf, wenn das Element innerhalb seines Scrollports sichtbar ist. Der Zeitachsenfortschritt beginnt bei `0%`, wenn das verfolgte Subjekt beginnt, sich mit dem Block- oder Inlin-Endrand des Scrollports zu schneiden. Die `100%` werden erreicht, wenn das Subjekt den Scrollport am Block- oder Inline-Startrand verlässt.

Da die `100%` im Allgemeinen erreicht wird, wenn das Element den Bildschirm verlässt, möchten Sie wahrscheinlich den finalen Effekt Ihrer Animation in einem Keyframe-Block festlegen, der lange vor dem Ende der Animation stattfindet. Sie können Ihren fertigen Effekt innerhalb des `20%`, `50%` oder `80%` Keyframe-Blocks festlegen und nicht den `to` oder `100%` Keyframe verwenden, um sicherzustellen, dass das Element vollständig animiert, während es noch im Sichtbereich ist.

Mit View-Fortschritts-Zeitachsen können Sie den Sichtbarkeitsbereich des View-Fortschritts anpassen. Verwenden Sie {{cssxref("view-timeline-inset")}}, ein Bestandteil der {{cssxref("view-timeline")}} Kurzform, um einzustellen, wann das Subjekt als im Sichtbereich betrachtet wird. Der Standardwert ist `auto`. Der Effekt eines nicht-`auto` Werts der Einfügung ist, als ob Sie die Ränder des Scrollports verschoben: ein positiver Einfügungswert erzeugt eine interne Anpassung und ein negativer Wert eine externe Anpassung.

Ähnlich wie bei den Scroll-Fortschritts-Zeitachsen kann die View-Fortschritts-Zeitachse benannt oder anonym sein.

### Benannte View-Fortschritts-Zeitachse

Eine _benannte View-Fortschritts-Zeitachse_ ist eine, bei der das Subjekt ausdrücklich mit der {{cssxref("view-timeline-name")}} Eigenschaft, einem Bestandteil der `view-timeline` Kurzform, benannt ist. Der `<dashed-ident>` Name wird dann mit dem zu animierenden Element verknüpft, indem er als der Wert der `animation-timeline` Eigenschaft dieses Elements angegeben wird.

Bei benannten View-Fortschritts-Zeitachsen muss das zu animierende Element nicht mit dem Subjekt identisch sein. Das bedeutet, dass das Element, das die Zeitachse steuert, nicht mit dem Element identisch sein muss, das animiert wird. Sie können also ein Element basierend auf dem Bewegungsablauf eines anderen Elements innerhalb seines scrollbaren Containers animieren.

Hier verwenden wir die {{cssxref("view-timeline-name")}} Eigenschaft, um ein Element zu benennen und es als die Quelle einer View-Fortschritts-Zeitachse zu identifizieren. Wir setzen dann diesen Namen als den Wert der `animation-timeline` Eigenschaft.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

Wir haben die Animation **vor** der Animationszeitachse angewendet, da die `animation` die `animation-timeline` auf `auto` zurücksetzt.

Die Animation unterscheidet sich leicht von den vorherigen Beispielen, da der Spinning-Effekt bei `20%` beginnt und bei `80%` der Animation endet; das bedeutet, dass das Element nicht aktiv dreht, wenn es zum ersten Mal in den Blick kommt und aufhört zu drehen, bevor es vollständig aus dem Blick ist.

```css live-sample___named_view live-sample___anon_view
@keyframes action {
  0%,
  20% {
    rotate: 45deg;
  }
  80%,
  100% {
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

Scrollen Sie das Element in den Blick. Beachten Sie, dass das Element durch die `@keyframes` Animation animiert wird, während es sich durch den sichtbaren Bereich seines Ahnen-Scrollers bewegt.

### Anonyme View-Fortschritts-Zeitachse: die `view()` Funktion

Alternativ kann eine {{cssxref("animation-timeline/view", "view()")}} Funktion als Wert der `animation-timeline` Eigenschaft gesetzt werden, um anzugeben, dass die Animationszeitachse eines Elements eine _anonyme View-Fortschritts-Zeitachse_ ist. Dies führt dazu, dass das Element basierend auf seiner Position innerhalb seines nächstgelegenen Eltern-Scrollers animiert wird.

Die `view()` Funktion erstellt eine View-Zeitachse. Sie verknüpfen die Zeitachse mit dem Element, das Sie animieren möchten, indem Sie die `animation-timeline` Eigenschaft verwenden. Die Funktion erstellt eine View-Zeitachse für jedes Element, das durch den Selektor übereinstimmt.

In diesem Beispiel definieren wir erneut die `animation` vor der `animation-timeline`, sodass die Zeitleiste nicht zurückgesetzt wird. Dann fügen wir eine `view()` Funktion ohne Argumente ein. Wir geben keinen Scroller an, da definitionsgemäß die Sichtbarkeit des Subjekts durch seinen nächsten Ahnen-Scroller verfolgt wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der `view()` Funktion

Die `view()` Funktion nimmt bis zu drei optionale Werte als Argumente:

- Null oder einen `<axis>` Parameter. Wenn gesetzt, gibt dies die Scroll-Achse an, entlang der die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder null, ein oder zwei {{cssxref("length-percentage")}} Einfügungswerte. Wenn gesetzt, geben diese Werte Offsets für den Anfang und/oder das Ende des Scrollports an.

Die Deklaration `view()` entspricht `view(block auto)`, die `block` als die Achse des Eltern-Elements definiert, die die Zeitleiste bereitstellt, und die {{cssxref("scroll-padding")}}, die im Allgemeinen standardmäßig auf `0` gesetzt ist, als die Einfügungen innerhalb des sichtbaren Bereichs, bei denen die Animation beginnt und endet.

Die Funktion setzt die Werte der {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} Eigenschaften.

Die {{cssxref("view-timeline-inset")}} Argumente geben Einfügungen (falls positiv) oder Ausweitungen (falls negativ) an, die den Anfang und das Ende des Scrollports anpassen. Sie werden verwendet, um die Scroll-Positionen zu bestimmen, an denen das Element als "in Sicht" betrachtet wird, was die Länge der Animationszeitachse bestimmt. Mit anderen Worten, statt am Startrand und am Endrand des Scrollports zu beginnen und zu enden, tritt die Animation am Anfang und Ende des einfügungsangepassten Sichtbereichs auf.

Im Gegensatz zur `scroll()` Funktion der Scroll-Zeitachse gibt es kein `<scroller>` Argument in der Funktion `view()`, da die View-Zeitachse immer das Subjekt innerhalb ihres nächsten Ahnen-Scrollcontainers verfolgt.

In diesem Beispiel, da wir Einfügungswerte verwenden, können wir die `from` und `to` Keyframe Selector verwenden.

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

## Barrierefreiheit bedenken

Wie bei allen Animationen und Übergängen sollten Sie immer die [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Präferenz eines Benutzers berücksichtigen.

### Entfernen einer Animationszeitachse

Das Setzen von `animation-timeline: none` löst die Verbindung des Elements von allen Animationszeitachsen, einschließlich der standardmäßigen zeitbasierten Dokumentzeitachse, so dass das Element nicht animiert. Während einige Animationen notwendig sein können, können Sie Animationen basierend auf der `prefers-reduced-motion` Einstellung des Benutzers mit:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da die `animation` Kurzform die `animation-timeline` auf `auto` setzt, verwenden Sie einen Selektor mit ausreichender Spezifität, um sicherzustellen, dass Ihre `animation-timeline` nicht von Ihren `animation` Kurzform Deklarationen überschrieben wird.

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
