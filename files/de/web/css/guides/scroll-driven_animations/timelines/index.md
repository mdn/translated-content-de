---
title: Scroll-gesteuerte Animationen
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Ein häufiges UI-Muster beinhaltet Elemente, die sich animieren, während der Benutzer vertikal oder horizontal über eine Seite scrollt. Diese _scroll-gesteuerten Animationen_ treten als direkte Reaktion auf das Scrollen der Seite oder einen überlaufenden Scroll-Container innerhalb einer Seite auf.

Die im Modul [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), indem sie ermöglichen, die Werte von animierenden Eigenschaften zu definieren, die in {{cssxref("@keyframes")}}-Animationen als Reaktion auf Benutzereingriffe verwendet werden.

Dieser Leitfaden bietet einen Überblick über die Verwendung von CSS zur Erstellung von scroll-gesteuerten Animations-Timelines und Animationen.

## Was sind scroll-gesteuerte Animationen?

Das Modul [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Eigenschaften, die es ermöglichen, [CSS-Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) mit dem Scrollen zu verknüpfen.

### Fortschritt der Timeline

Animationen können so eingestellt werden, dass sie entlang einer _scroll-basierten Timeline_ voranschreiten, anstatt entlang der standardmäßigen zeitbasierten Dokumenten-Timeline, ohne dass JavaScript erforderlich ist. Mit CSS können wir [definieren, welche Animations-Timeline](#animationstimelines) verwendet werden soll, einschließlich des Animierens von Elementen durch das Scrollen eines scrollbaren Elements, anstatt durch den Zeitverlauf.

### Leistungsverbesserungen

CSS scroll-gesteuerte Animationen sind performant. JavaScript scroll-gesteuerte Animationen erfordern [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis-Listener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekte im {{Glossary("main_thread", "Haupt-Thread")}}, um Elemente über den {{Glossary("Scroll_container#scrollport", "Scrollport")}} hinweg zu verfolgen. Jedes Mal, wenn Sie sich auf den Haupt-Thread verlassen, um Effekte mit JavaScript zu rendern, besteht die Gefahr, den Haupt-Thread zu blockieren, was zu einer unansprechbaren Seite und einer schlechten Benutzererfahrung oder {{Glossary("jank", "Rucklern")}} führen kann.

## Grundlagen

Scroll-gesteuerte Animationen bauen auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) auf. Bevor Sie scroll-gesteuerte Animationen erstellen, müssen Sie ein Verständnis von CSS-{{cssxref("@keyframes")}}-Animationen haben. Weitere Informationen finden Sie im [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

In CSS werden Animationen erstellt, indem Keyframe-Animationen unter Verwendung der {{cssxref("animation-name")}}-Eigenschaft (oder der {{cssxref("animation")}}-Kurzform) einem Element zugeordnet werden. Standardmäßig laufen Animationen auf der standardmäßigen Dokumenten-Timeline, wobei sie sich von der `from`-Keyframe zur `to`-Keyframe bewegen, während die Zeit vergeht, und die Animation so lange andauert, wie es durch den Wert der {{cssxref("animation-duration")}}-Eigenschaft definiert ist. Wenn sie auf der standardmäßigen Dokumenten-Timeline laufen, werden Animationen bis zum Ende abgespielt, es sei denn, sie werden daran gehindert, zum Beispiel durch das Setzen des {{cssxref("animation-play-state")}} auf `paused` oder durch Entfernen des `animation-name` vom Element.

Scroll-gesteuerte Animationen sind CSS-Animationen, die nicht auf der standardmäßigen [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) laufen. Stattdessen laufen sie auf einer Scroll-Fortschritts- oder Ansichts-Fortschrittstimeline, die durch das Scrollen des Inhalts eines Elements gesteuert wird. Es gibt eine direkte Verbindung zwischen der Scrollbewegung des Benutzers und dem Fortschritt der Animation entlang der `@keyframe`-Keyframes. Während der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch den Fortschritt der Keyframes. Wenn das Scrollen pausiert wird, pausiert die Animation, als ob `animation-play-state` auf `pause` gesetzt wäre.

## Animationstimelines

Die {{cssxref("animation-timeline")}}-Eigenschaft, definiert im Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), wird verwendet, um die für die Animation verwendete Timeline festzulegen.

Das Modul [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Funktionen, um die `animation-timeline` als Scroll-Fortschritts- oder Ansichts-Fortschrittstimeline festzulegen. Sie können explizit [ein Element als Timeline-Controller benennen](#benannte_scroll-fortschrittstimelines), indem Sie die Eigenschaften `scroll-timeline-*` und `view-timeline-*` verwenden, und dann diesen Namen als `animation-timeline` eines untergeordneten Elements festlegen. Sie können auch _anonyme Scroll-Fortschrittstimelines_ und _anonyme Ansichts-Fortschrittstimelines_ mit den Funktionen [`scroll()`](#scroll-fortschrittstimelines) und [`view()`](#ansichts-fortschrittstimelines) definieren.

Alternativ kann die `animation-timeline`-Eigenschaft verwendet werden, um explizit anzugeben, dass [die standardmäßige Dokumenten-Timeline verwendet werden soll](#regular_css_animations_default_document_timeline) oder dass [die Animation keine Timeline haben soll](#removing_an_animations_timeline) und daher überhaupt nicht auftreten sollte.

### Reguläre CSS-Animationen: Standardmäßige Dokumenten-Timeline

Das explizite Setzen der `animation-timeline` auf `auto` oder das Weglassen der Eigenschaft und das Zulassen, dass sie auf `auto` standardmäßig gesetzt wird, setzt die Timeline auf die standardmäßige Dokumenten-Timeline. Wenn diese standardmäßiger Wert gesetzt ist, wird der Fortschritt der Animation durch die {{cssxref("animation-duration")}}, die {{cssxref("animation-delay")}} und die verstrichene Zeit seit der Zuordnung der Animation zu dem Element über die Eigenschaft `animation-name` bestimmt. Die zeitbasierte Dokumenten-Timeline ist die Timeline, die traditionell mit CSS-Animationen assoziiert ist.

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

Wenn das Kontrollkästchen aktiviert ist, wird die `action`-Animation auf das Element angewendet. Wenn es deaktiviert ist, wird die Animation nicht auf das `<div>` angewendet.

{{EmbedLiveSample("regular", "100%", "150")}}

Versuchen Sie, das Kontrollkästchen zu aktivieren. Während der halben Sekunde Animationsverzögerung passiert nichts. Dann springt das Box-Element, sobald die Animation startet, in eine 45-Grad-Drehung, und es dauert 3 Sekunden, um zusätzliche 720 Grad oder zwei weitere vollständige Umdrehungen zu drehen. Nach insgesamt dreieinhalb Sekunden endet die Animation, und das `<div>` kehrt in seinen ursprünglichen, nicht rotierten Zustand zurück.

> [!NOTE]
> Die `animation-timeline` wird durch die {{cssxref("animation")}}-Kurzform-Eigenschaft auf den Standardwert `auto` zurückgesetzt, kann jedoch nicht mit der Kurzform gesetzt werden. Daher sollten Sie bei der Erstellung scroll-gesteuerter Animationen die `animation-timeline` immer nach allen `animation`-Kurzformdeklarationen deklarieren, um den gewünschten Effekt zu erzielen.

## Scroll-Fortschrittstimelines

Bei einer _Scroll-Fortschrittstimeline_ schreitet die Timeline basierend auf dem Scrollen des scrollbaren Elements (_Scroller_) von oben nach unten (oder von links nach rechts) und zurück wieder voran. Standardmäßig wird die Position im Scrollbereich in einen prozentualen Fortschritt umgewandelt – `0%` am Anfang und `100%` am Ende. <!--Dieser [Animationsbereich kann über die {{cssxref("animation-range")}}-Eigenschaften gesteuert werden](#controlling_the_animation_range).-->

Um eine Scroll-Fortschrittstimeline zu erstellen, muss der `animation-timeline`-Wert den Scroller referenzieren, der benannt oder anonym sein kann.

### Benannte Scroll-Fortschrittstimelines

Eine _benannte Scroll-Fortschrittstimeline_ ist eine, bei der der Scroller explizit mithilfe der {{cssxref("scroll-timeline-name")}}-Eigenschaft (oder der {{cssxref("scroll-timeline")}}-Kurzform) benannt wird. Der Name ist ein {{cssxref("dashed-ident")}}. Der Scroller wird mit dem zu animierenden Element verknüpft, indem sein `scroll-timeline-name` als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.

Unser HTML enthält drei Elemente: das `item`, das wir animieren werden; seinen `container`, den wir scrollen werden; und den Scroller. Der `container` muss groß genug sein, um seinen `scroller`-Elternelement zu überlaufen: Wenn es kein Scrollen gibt, wird es keine Scroll-Timeline geben.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir stellen einige grundlegende Stile bereit. Die wichtigen umfassen das Setzen einer Höhe auf den Container, die größer ist als der Scroller, und das Festlegen des Überlaufs zum Scrollen:

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

Das Setzen einer `animation-timeline` auf das animierte Element, die mit dem `scroll-timeline-name` eines Elternelements übereinstimmt, ist das, was die benannte Scroll-Fortschrittstimeline erstellt. Wir müssen auch eine Animation einschließen, indem wir den Wert der `animation-name`-Komponente der {{cssxref("animation")}}-Kurzform auf den {{cssxref("custom-ident")}}-Namen unserer Keyframe-Animation setzen:

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

In diesem Fall haben wir kein Kontrollkästchen, da der Fortschritt der `action`-Animation durch das Scrollen des überfüllenden Scrollers gesteuert wird, der, anders als Zeit, nicht abläuft.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Bevor das Scrollen erfolgt, befindet sich die Position des Containers am oberen Rand des Scrollers, und die Animation befindet sich beim 0%-Keyframe. Versuchen Sie, nach unten zu scrollen. Während Sie scrollen, schreitet die Animation durch die Timeline voran und dreht sich um zusätzliche 720 Grad. Wenn Sie nicht mehr scrollen können, befindet sich der Fortschritt der Animation beim 100%- oder `to`-Keyframe. Das animierte Element kehrt nicht in seine Standardrotation zurück, es sei denn, der Scroller wird wieder nach oben gescrollt.

#### Animationsdauer

Sie haben vielleicht bemerkt, dass die {{cssxref("animation-duration")}}-Komponente der `animation`-Kurzform auf `1ms` gesetzt wurde. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) beeinflusst das Angeben eines `animation-duration`-Werts nicht die Dauer der Animation und sollte nicht erforderlich sein. Allerdings können Dauern nicht-lineare Ansichts-Fortschrittstimeline beeinflussen, und Firefox erfordert eine nicht-null `animation-duration`, um eine Animation auf ein Element anzuwenden. Aus diesen Gründen ist es gängige Praxis, `animation-duration` auf `1ms` zu setzen.

Das Setzen von `animation-duration: 1ms` stellt sicher, dass die Animation in Firefox funktioniert, der Animationseffekt in allen Browsern konsistent ist und die Animation verborgen ist, wenn ein Browser keine Ansichts-Fortschrittstimeline unterstützt. Wenn der Browser Keyframe-Animationen unterstützt, wird die Animation für den Benutzer nicht sichtbar sein. Die Animation findet jedoch trotzdem statt und Animationsevents werden ausgelöst.

### Anonyme Scroll-Fortschrittstimelines

Sie müssen Ihre Scroll-Fortschrittstimeline nicht benennen. Stattdessen können Sie einer Animation eine _anonyme Scroll-Fortschrittstimeline_ zuweisen. In diesem Fall wird die `animation-timeline` des zu animierenden Elements auf eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion gesetzt. Die Funktion wählt den Scroller aus, der die Scroll-Fortschrittstimeline bereitstellt, und die Scroll-Achse, die basierend auf den optionalen Argumenten verwendet werden soll, die Sie an die Funktion übergeben. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller)-Schlüsselwort, das die Beziehung des Scroller-Elements zum aktuellen Element definiert (`nearest`, `root` oder `self`). Der andere ist der Scrollbalken `<axis>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis) Wert (`block`, `inline`, `y` oder `x`).

Dieses Beispiel verwendet denselben CSS wie das vorherige Beispiel, außer dass die `animation-timeline` auf eine `scroll()`-Funktion gesetzt wird. Wir überschreiben auch die Größe des Containers, um die Richtung des Scrolling zu ändern:

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

Wir setzen eine {{cssxref("inline-size")}} auf den Container, sodass er in der Inline-Richtung überfließt, und setzen die {{cssxref("block-size")}} auf `100%`, sodass er in der Blockrichtung nicht mehr überfließt. Versuchen Sie, in die Inline-Richtung zu scrollen.

## Ansichts-Fortschrittstimelines

Sie können eine Animation auch basierend auf der Sichtbarkeitsänderung eines Elements innerhalb eines Scrollers fortschreiten lassen — dies geschieht über _Ansichts-Fortschrittstimelines_. Anstatt den Scroll-Offset eines Scroll-Containers zu verfolgen, verfolgen Ansichts-Fortschrittstimelines die relative Position eines Elements, das als _Subjekt_ bezeichnet wird, innerhalb eines Scrollports. Der Fortschritt der Keyframes einer Animation basiert auf der _Sichtbarkeit_ des Subjekts innerhalb des Scrollers. Im Gegensatz zu Scroll-Fortschrittstimelines können Sie bei Ansichts-Fortschrittstimelines den Scroller nicht festlegen – die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Scroller-Vorfahren verfolgt.

Eine Ansichts-Fortschrittstimeline-Animation tritt nur auf, wenn das Element innerhalb seines Scrollports sichtbar ist. Der Fortschritt der Timeline beginnt bei `0%`, wenn das verfolgte Subjekt beginnt, den Scrollport an der Block- oder Inline-Endkante zu schneiden. Die `100%` treten auf, wenn das Subjekt den Scrollport an der Block- oder Inline-Anfangskante verlässt.

Da die `100%` in der Regel erreicht werden, wenn das Element den Viewport verlässt, möchten Sie wahrscheinlich den finalen Effekt Ihrer Animation in einem Keyframe-Block festlegen, der deutlich vor dem Ende der Animation erfolgt. Sie können Ihren abgeschlossenen Effekt innerhalb des `20%`-, `50%`- oder `80%`-Keyframe-Blocks festlegen, anstatt den `to`- oder `100%`-Keyframe zu verwenden, um sicherzustellen, dass das Element die Animation abschließt, während es noch sichtbar ist.

Bei Ansichts-Fortschrittstimelines können Sie den Sichtbarkeitsbereich des Ansichts-Fortschritts anpassen.
Verwenden Sie {{cssxref("view-timeline-inset")}}, ein Bestandteil der {{cssxref("view-timeline")}}-Kurzform, um anzupassen, wann das Subjekt als im Blick angesehen wird. Der Standardwert ist `auto`. Die Wirkung eines jeden nicht-`auto` Einfügewerts ist, als ob Sie die Kanten des Scrollports verschoben hätten: Ein positiver Einfügewert erzeugt eine nach innen gerichtete Anpassung, und ein negativer Wert erzeugt eine nach außen gerichtete Anpassung.

Ähnlich wie bei Scroll-Fortschrittstimelines kann die Ansichts-Fortschrittstimeline benannt oder anonym sein.

### Benannte Ansichts-Fortschrittstimeline

Eine _benannte Ansichts-Fortschrittstimeline_ ist eine, bei der das Subjekt explizit mithilfe der {{cssxref("view-timeline-name")}}-Eigenschaft benannt wird, einem Bestandteil der `view-timeline`-Kurzform. Der `dashed-ident` Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.

Bei benannten Ansichts-Fortschrittstimelines muss das zu animierende Element nicht dasselbe wie das Subjekt sein. Mit anderen Worten, das Element, das die Timeline steuert, muss nicht dasselbe sein wie das Element, das animiert wird. Dies bedeutet, dass Sie ein Element basieren auf der Bewegung eines anderen Elements innerhalb seines scrollbaren Containers animieren können.

Hier verwenden wir die {{cssxref("view-timeline-name")}}-Eigenschaft, um ein Element zu benennen und es selbst als Quelle einer Ansichts-Fortschrittstimeline zu identifizieren. Wir setzen dann diesen Namen als den Wert der `animation-timeline`-Eigenschaft fest.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

Wir haben die Animation **vor** der Animationstimeline angewendet, da die `animation` die `animation-timeline` auf `auto` zurücksetzt.

Die Animation ist etwas anders als in den vorherigen Beispielen, da sich der Drehungseffekt bei `20%` startet und bei `80%` des Wegs durch die Animation endet; dies bedeutet, dass das Element nicht aktiv dreht, wenn es erstmals sichtbar wird, und vor dem vollständigen Verlassen des Blickfelds aufhört, sich zu drehen.

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

Scrollen Sie das Element in den Blick. Beachten Sie, dass das Element durch die `@keyframes`-Animation animiert, während es sich durch den sichtbaren Bereich seines Vorfahren-Scrollers bewegt.

### Anonyme Ansichts-Fortschrittstimeline: die `view()` Funktion

Alternativ kann eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der `animation-timeline`-Eigenschaft festgelegt werden, um anzugeben, dass die Animation eines Elements auf einer _anonymen Ansicht-Fortschrittstimeline_ basiert. Dies führt dazu, dass das Element basierend auf seiner Position innerhalb seines nächstgelegenen Elternelement-Scrollers animiert wird.

Die `view()`-Funktion erstellt eine Ansichtstimeline. Sie fügen die Timeline dem Element hinzu, das Sie animieren möchten, unter Verwendung der `animation-timeline`-Eigenschaft. Die Funktion erstellt eine Ansichtstimeline für jedes durch den Selektor ausgewählte Element.

In diesem Beispiel definieren wir die `animation` erneut vor der `animation-timeline`, damit die Timeline nicht zurückgesetzt wird. Dann fügen wir eine `view()`-Funktion ohne Argumente ein. Wir geben keinen Scroller an, da die Sichtbarkeit des Subjekts definitionsgemäß durch seinen nächstgelegenen Vorfahren-Scroller erfasst wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der `view()` Funktion

Die `view()`-Funktion nimmt bis zu drei optionale Werte als Argumente an:

- Null oder ein `<axis>`-Parameter. Wenn gesetzt, gibt dies die Scrollachse an, entlang der die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder Null, eins oder zwei {{cssxref("length-percentage")}}-Einfügewerte. Wenn gesetzt, geben diese Werte die Offsets für den Start und/oder das Ende des Scrollports an.

Das Deklarieren von `view()` entspricht `view(block auto)`, was `block` als die Achse des Elternelements definiert, die die Timeline liefert, und die {{cssxref("scroll-padding")}}, die allgemein standardmäßig `0` ist, als Einblicke innerhalb des sichtbaren Bereichs, bei dem die Animation startet und endet.

Die Funktion setzt die Werte der {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}}-Eigenschaften.

Die {{cssxref("view-timeline-inset")}} Argumente geben Einsätze (wenn positiv) oder Auslagerungen (wenn negativ) an, die den Anfang und das Ende des Scrollports anpassen. Sie werden verwendet, um die Scrollpositionen zu bestimmen, bei denen das Element als "im Blick" angesehen wird, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, anstatt am Anfangsrand zu starten und am Endrand des Scrollports zu enden, erfolgt die Animation am Anfang und Ende der Einsead-Vereinstellten Ansicht.

Im Gegensatz zur `scroll()`-Funktion der Scroll-Timeline gibt es kein `<scroller>`-Argument in der `view()`-Funktion, da die Sichtbarkeits-Timeline das Subjekt immer innerhalb seines nächstgelegenen Vorfahren-Scrollcontainers verfolgt.

In diesem Beispiel, da wir sie mit Einfügenwerten verwenden, können wir die `from` und `to` [Keyframe-Selektionsson](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) verwenden.

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

## Zugänglichkeitsbedenken

Wie bei allen Animationen und Übergängen sollten Sie immer die Präferenz eines Benutzers [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) berücksichtigen.

### Entfernen Sie die Timeline einer Animation

Das Setzen von `animation-timeline: none` hebt die Zuordnung des Elements zu allen Animationstimelines auf, einschließlich der standardmäßigen zeitbasierten Dokumententimeline, was bedeutet, dass das Element nicht animiert. Während einige Animationen notwendig sein können, können Sie Animationen basierend auf der Einstellung des Benutzers `prefers-reduced-motion` mit:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da die `animation`-Kurzform die `animation-timeline` auf `auto` setzt, verwenden Sie einen Selektor mit ausreichender Spezifität, um sicherzustellen, dass Ihre `animation-timeline` nicht durch Ihre `animation`-Kurzformdeklarationen überschrieben wird.

## Siehe auch

- [Verständnis von Timeline-Namen des Bereichs](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
