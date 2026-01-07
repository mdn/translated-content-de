---
title: Scroll-gesteuerte Animationstimelines
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

Ein häufiges UI-Muster umfasst Elemente, die animiert werden, während der Benutzer vertikal oder horizontal über eine Seite scrollt. Diese _scrollgesteuerten Animationen_ treten als direkte Reaktion auf das Scrollen der Seite oder eines überfließenden Scroll-Containers innerhalb einer Seite auf.

Die im Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), indem sie Animationen von Eigenschaftswerten ermöglichen, die in {{cssxref("@keyframes")}} Animationen als Reaktion auf Benutzerinteraktionen definiert sind.

Dieser Leitfaden bietet einen Überblick über die Verwendung von CSS zur Erstellung scrollgesteuerter Animationstimelines und Animationen.

## Was ist scrollgesteuerte Animation?

Das Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Eigenschaften, die es ermöglichen, [CSS-Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) mit dem Scrollen zu verknüpfen.

### Fortschreiten der Timeline

Animationen können auf einer _scrollbasierten Timeline_ anstatt auf der standardmäßigen zeitbasierten Document-Timeline fortschreiten, ohne dass JavaScript benötigt wird. CSS ermöglicht es uns, [zu definieren, welche Animationstimeline](#animationstimelines) verwendet werden soll, einschließlich der Animation von Elementen durch das Scrollen eines scrollbaren Elements anstelle des Zeitvergehens.

### Leistungsbezogene Vorteile

CSS-scrollgesteuerte Animationen sind leistungsfähig. JavaScript-scrollgesteuerte Animationen erfordern [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignislistener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekte im {{Glossary("main_thread", "Haupt-Thread")}}, um Elemente im {{Glossary("Scroll_container#scrollport", "Scrollport")}} zu verfolgen. Jedes Mal, wenn Sie sich auf den Haupt-Thread verlassen, um Effekte mit JavaScript zu rendern, riskieren Sie, den Haupt-Thread zu blockieren, was zu einer nicht ansprechbaren Seite und einer schlechten Benutzererfahrung führen kann, oder zu {{Glossary("jank", "Ruckeln")}}.

## Grundlagen

Scrollgesteuerte Animationen basieren auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API). Bevor Sie scrollgesteuerte Animationen erstellen, müssen Sie ein Verständnis für CSS {{cssxref("@keyframes")}} Animationen haben. Weitere Informationen finden Sie im [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

In CSS werden Animationen erstellt, indem Keyframe-Animationen mit einem Element über die {{cssxref("animation-name")}}-Eigenschaft (oder die {{cssxref("animation")}}-Abkürzung) verbunden werden. Standardmäßig laufen Animationen in der standardmäßigen Dokument-Timeline ab und bewegen sich von der `from`-Keyframe zur `to`-Keyframe, während die Zeit vergeht und die Animation so lange dauert, wie es der durch den Wert der {{cssxref("animation-duration")}}-Eigenschaft definierte Zeitrahmen vorgibt. Wenn sie auf der standardmäßigen Dokument-Timeline festgelegt sind, laufen Animationen bis zum Abschluss, es sei denn, sie werden daran gehindert, beispielsweise indem die {{cssxref("animation-play-state")}} auf `paused` gesetzt wird oder der `animation-name` vom Element entfernt wird.

Scrollgesteuerte Animationen sind CSS-Animationen, die nicht in der standardmäßigen [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) laufen. Stattdessen laufen sie auf einer Scroll-Fortschritts- oder Sicht-Fortschritts-Timeline, die durch das Scrollen des Inhalts eines Elements gesteuert wird. Es gibt eine direkte Verbindung zwischen der Scroll-Bewegung des Benutzers und dem Fortschritt der Animation entlang der `@keyframe`-Keyframes. Während der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch die Keyframe-Abfolge. Wenn das Scrollen pausiert wird, pausiert auch die Animation, als ob `animation-play-state` auf `pause` gesetzt wäre.

## Animationstimelines

Die im Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) definierte {{cssxref("animation-timeline")}}-Eigenschaft wird verwendet, um die für die Animation zu verwendende Timeline festzulegen.

Das Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Funktionen zur Festlegung der `animation-timeline` als Scroll-Fortschritts- oder Sicht-Fortschritts-Timeline. Sie können explizit [ein Element als Timeline-Controller benennen](#benannte_scroll-fortschritts-timelines), indem Sie die `scroll-timeline-*` und `view-timeline-*`-Eigenschaften verwenden und diesen Namen dann als `animation-timeline` eines nachgeordneten Elements festlegen. Sie können auch _anonyme Scroll-Fortschritts-Timelines_ und _anonyme Sicht-Fortschritts-Timelines_ mithilfe der [`scroll()`](#scroll-fortschritts-timelines) und [`view()`](#sicht-fortschritts-timelines))-Funktionen definieren.

Alternativ kann die `animation-timeline`-Eigenschaft verwendet werden, um explizit anzugeben, dass die [standardmäßige Dokument-Timeline verwendet wird](#regular_css_animations_default_document_timeline) oder um anzugeben, dass die [Animation keine Timeline hat](#removing_an_animations_timeline) und daher überhaupt nicht stattfinden sollte.

### Reguläre CSS-Animationen: standardmäßige Dokument-Timeline

Das explizite Setzen von `animation-timeline` auf `auto` oder das Weglassen der Eigenschaft und das Zugrundelegen von `auto` setzt die Timeline auf die standardmäßige Dokument-Timeline. Bei dieser Standardeinstellung wird der Fortschritt der Animation durch die {{cssxref("animation-duration")}}, die {{cssxref("animation-delay")}} und die verstrichene Zeit seit der Verknüpfung der Animation mit dem Element über die `animation-name`-Eigenschaft bestimmt. Die zeitbasierte Dokument-Timeline ist die Timeline, die traditionell mit CSS-Animationen assoziiert wird.

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

Versuchen Sie, das Kontrollkästchen zu aktivieren. Während der halben Sekunde Verzögerung der Animation wird nichts passieren. Dann, sobald die Animation beginnt, springt das Kästchen zu einer 45-Grad-Drehung und benötigt dann 3 Sekunden, um sich um zusätzliche 720 Grad oder zwei weitere volle Umdrehungen zu drehen. Nach insgesamt dreieinhalb Sekunden endet die Animation und das `<div>` kehrt in seinen nicht-gedrehten Ausgangszustand zurück.

> [!NOTE]
> Die `animation-timeline` wird durch die {{cssxref("animation")}}-Abkürzungseigenschaft auf den Standardwert `auto` zurückgesetzt, kann jedoch nicht mit der Abkürzung gesetzt werden. Daher sollte beim Erstellen scrollgesteuerter Animationen die `animation-timeline` stets nach allen `animation`-Abkürzungserklärungen deklariert werden, um den gewünschten Effekt zu erzielen.

## Scroll-Fortschritts-Timelines

Mit einer _Scroll-Fortschritts-Timeline_ schreitet die Timeline basierend auf dem Scrollen des scrollbaren Elements (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück. Standardmäßig wird die Position im Scroll-Bereich in einen Fortschrittsprozentsatz umgewandelt — `0%` am Anfang und `100%` am Ende. <!--Dieser [Animationsbereich kann durch](#controlling_the_animation_range) die {{cssxref("animation-range")}}-Eigenschaften gesteuert werden.-->

Um eine Scroll-Fortschritts-Timeline zu erstellen, muss der `animation-timeline`-Wert auf den Scroller verweisen, der benannt oder anonym sein kann.

### Benannte Scroll-Fortschritts-Timelines

Eine _benannte Scroll-Fortschritts-Timeline_ ist eine, bei der der Scroller mit der {{cssxref("scroll-timeline-name")}}-Eigenschaft (oder der {{cssxref("scroll-timeline")}}-Abkürzung) explizit benannt wird. Der Name ist ein {{cssxref("dashed-ident")}}. Der Scroller wird mit dem zu animierenden Element verknüpft, indem sein `scroll-timeline-name` als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.

Unser HTML enthält drei Elemente: das `item`, das wir animieren werden; seinen `container`, den wir scrollen werden; und den Scroller. Der `container` muss groß genug sein, um seinen `scroller`-Elternteil zu überlaufen: Wenn kein Scrollen vorhanden ist, wird es keine Scroll-Timeline geben.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir bieten einige Basisstile. Die wichtigen sind das Setzen einer Höhe auf den Container, die größer ist als der Scroller, und dann das Setzen des Überlaufs, um das Scrollen zu ermöglichen:

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

Das Setzen einer `animation-timeline` auf das animierte Element, die dem `scroll-timeline-name` eines übergeordneten Elements entspricht, ist das, was die benannte Scroll-Fortschritts-Timeline erstellt. Wir müssen auch eine Animation einfügen, die wir tun, indem wir den Wert der `animation-name`-Komponente der {{cssxref("animation")}}-Abkürzung auf den {{cssxref("custom-ident")}}-Namen unserer Keyframe-Animation setzen:

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

In diesem Fall haben wir kein Kontrollkästchen, da die `action`-Animationsfortschritt durch das Scrollen des überlaufenden Scrollers gesteuert wird, der, im Gegensatz zur Zeit, nicht abläuft.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Bevor irgendein Scrollen stattfindet, befindet sich die Position des Containers oben im Scroller und die Animation befindet sich im 0%-Keyframe. Versuchen Sie, nach unten zu scrollen. Während Sie scrollen, schreitet die Animation auf der Timeline fort, indem sie sich um zusätzliche 720 Grad dreht. Wenn Sie nicht weiter scrollen können, befindet sich der Fortschritt der Animation am 100%- oder `to`-Keyframe. Das animierte Element kehrt nicht in seine Standard-Rotation zurück, es sei denn, der Scroller wird wieder nach oben gescrollt.

#### Animationsdauer

Sie haben vielleicht bemerkt, dass die {{cssxref("animation-duration")}}-Komponente der `animation`-Abkürzung auf `1ms` gesetzt war. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) beeinflusst der Wert der `animation-duration` nicht die Dauer der Animation und sollte nicht notwendig sein. Dennoch können Dauern nicht-lineare Sicht-Fortschritts-Animationstimelines beeinflussen, und Firefox erfordert eine nicht-nullene `animation-duration`, um eine Animation auf ein Element anzuwenden. Aus diesen Gründen ist es gängige Praxis, die `animation-duration` auf `1ms` zu setzen.

Das Setzen von `animation-duration: 1ms` stellt sicher, dass die Animation in Firefox funktioniert, der Animationseffekt in allen Browsern konsistent ist und die Animation versteckt ist, wenn ein Browser keine Sicht-Fortschritts-Animationstimelines unterstützt. Wenn der Browser Keyframe-Animationen unterstützt, wird die Animation für den Benutzer nicht sichtbar sein. Dennoch findet die Animation statt und Animationsevents werden ausgelöst.

### Anonyme Scroll-Fortschritts-Timelines

Sie müssen Ihre Scroll-Fortschritts-Timeline nicht benennen. Stattdessen können Sie eine _anonyme Scroll-Fortschritts-Timeline_ mit der Animation verknüpfen. In diesem Fall wird die `animation-timeline` des zu animierenden Elements auf eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion gesetzt. Die Funktion wählt den Scroller aus, der die Scroll-Fortschritts-Timeline bereitstellt, und die zu verwendende Scroll-Achse basierend auf den optionalen Argumenten, die Sie ihr übergeben. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller)-Schlüsselwort, das die Beziehung des Scroller-Elements zum aktuellen Element definiert (`nearest`, `root` oder `self`). Der andere ist der Scrollbalken [`<axis>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis)-Wert (`block`, `inline`, `y` oder `x`).

Dieses Beispiel verwendet denselben CSS wie das vorherige Beispiel, mit Ausnahme der `animation-timeline`, die wir auf eine `scroll()`-Funktion setzen. Wir überschreiben auch die Größe des Containers, um die Scroll-Richtung zu ändern:

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

Wir setzen eine {{cssxref("inline-size")}} auf den Container, so dass er in der Inline-Richtung überläuft, und setzen die {{cssxref("block-size")}} auf `100%`, so dass er nicht mehr in der Blockrichtung überläuft. Versuchen Sie, in der Inline-Richtung zu scrollen.

## Sicht-Fortschritts-Timelines

Sie können auch eine Animation basierend auf der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers fortschreiten lassen – dies geschieht über _Sicht-Fortschritts-Timelines_. Anstatt den Scroll-Offset eines Scroll-Containers zu verfolgen, verfolgen Sicht-Fortschritts-Timelines die relative Position eines Elements, das _Subjekt_ genannt wird, innerhalb eines Scrollports. Der Fortschritt der Keyframes einer Animation basiert auf der _Sichtbarkeit_ des Subjekts innerhalb des Scrollers. Anders als bei Scroll-Fortschritts-Timelines können Sie bei Sicht-Fortschritts-Timelines den Scroller nicht spezifizieren — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächsten übergeordneten Scrollers verfolgt.

Eine Sicht-Fortschritts-Timeline-Animation tritt nur auf, wenn das Element innerhalb seines Scrollports sichtbar ist. Der Fortschritt der Timeline beginnt bei `0%`, wenn das verfolgte Subjekt beginnt, den Scrollport an der Block- oder Inline-Endkante zu schneiden. Die `100%` treten ein, wenn das Subjekt den Scrollport an der Block- oder Inline-Startkante verlässt.

Da `100%` normalerweise erreicht werden, wenn das Element den Viewport verlässt, möchten Sie wahrscheinlich den finalen Effekt Ihrer Animation in einem Keyframe-Block festlegen, der weit vor dem Ende der Animation auftritt. Sie können Ihren abgeschlossenen Effekt im `20%`, `50%` oder `80%`-Keyframe-Block festlegen, anstatt den `to`- oder `100%`-Keyframe zu verwenden, um sicherzustellen, dass das Element seine Animation beendet, während es noch sichtbar ist.

Mit Sicht-Fortschritts-Timelines können Sie den Sichtbarkeitsbereich der Fortschrittsansicht anpassen. Verwenden Sie {{cssxref("view-timeline-inset")}}, das Teil der {{cssxref("view-timeline")}}-Abkürzung ist, um anzupassen, wann das Subjekt als sichtbar betrachtet wird. Der Standardwert ist `auto`. Der Effekt eines nicht-`auto`-Einsatzwertes ist so, als hätten Sie die Kanten des Scrollports bewegt: Ein positiver Einsatzwert bewirkt eine nach innen gerichtete Anpassung, und ein negativer Wert erzeugt eine nach außen gerichtete Anpassung.

Ähnlich wie bei Scroll-Fortschritts-Timelines kann die Sicht-Fortschritts-Timeline benannt oder anonym sein.

### Benannte Sicht-Fortschritts-Timeline

Eine _benannte Sicht-Fortschritts-Timeline_ ist eine, bei der das Subjekt mit der {{cssxref("view-timeline-name")}}-Eigenschaft, einer Komponente der `view-timeline`-Abkürzung, explizit benannt wird. Der `<dashed-ident>`-Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.

Bei benannten Sicht-Fortschritts-Timelines muss das zu animierende Element nicht mit dem Subjekt gleich sein. Mit anderen Worten, das Element, das die Timeline steuert, muss nicht mit dem Element übereinstimmen, das animiert wird. Dies bedeutet, dass Sie ein Element basierend auf der Bewegung eines anderen Elements innerhalb seines scrollbaren Containers animieren können.

Hier verwenden wir die {{cssxref("view-timeline-name")}}-Eigenschaft, um ein Element zu benennen und das Element selbst als Quelle einer Sicht-Fortschritts-Timeline zu identifizieren. Wir setzen dann diesen Namen als Wert der `animation-timeline`-Eigenschaft.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

Wir wendeten die Animation **vor** der Animationstimeline an, da die `animation` die `animation-timeline` auf `auto` zurücksetzt.

Die Animation ist leicht anders als in den vorhergehenden Beispielen, da der Drehungseffekt bei `20%` beginnt und bei `80%` des Animationsfortschritts endet; dies bedeutet, dass das Element nicht aktiv gedreht wird, wenn es zuerst in Sicht kommt, und das Drehen endet, bevor es vollständig aus der Sicht verschwindet.

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

Scrollen Sie das Element in die Ansicht. Beachten Sie, dass das Element durch die `@keyframes`-Animation fortschreitet, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.

### Anonyme Sicht-Fortschritts-Timeline: die `view()`-Funktion

Alternativ kann eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der `animation-timeline`-Eigenschaft gesetzt werden, um anzugeben, dass die Animationstimeline eines Elements eine _anonyme Sicht-Fortschritts-Timeline_ ist. Dies bewirkt, dass das Element basierend auf seiner Position innerhalb seines nächstgelegenen übergeordneten Scrollers animiert wird.

Die `view()`-Funktion erstellt eine Sicht-Timeline. Sie verbinden die Timeline mit dem Element, das Sie animieren möchten, über die `animation-timeline`-Eigenschaft. Die Funktion erstellt eine Sicht-Timeline für jedes Element, das vom Selektor ausgewählt wird.

In diesem Beispiel definieren wir erneut die `animation` vor der `animation-timeline`, so dass die Timeline nicht zurückgesetzt wird. Wir fügen dann eine argumentlose `view()`-Funktion ein. Wir spezifizieren keinen Scroller, da per Definition die Sichtbarkeit des Subjekts durch seinen nächstgelegenen übergeordneten Scroller verfolgt wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der `view()`-Funktion

Die `view()`-Funktion nimmt bis zu drei optionale Werte als Argumente entgegen:

- Null oder ein `<axis>`-Parameter. Wenn gesetzt, spezifiziert dieser die Scroll-Achse, entlang der die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder null, ein oder zwei {{cssxref("length-percentage")}}-Einsatzwerte. Wenn gesetzt, spezifizieren diese Werte Offsets für den Scrollport-Start und/oder das Ende.

Die Deklaration von `view()` ist gleichbedeutend mit `view(block auto)`, das `block` als die Achse des übergeordneten Elements definiert, das die Timeline bereitstellt, und das {{cssxref("scroll-padding")}}, das im Allgemeinen auf `0` standardmäßig gesetzt ist, als die Einsätze innerhalb des sichtbaren Bereichs, bei denen die Animation startet und endet.

Die Funktion setzt die Werte der {{cssxref("view-timeline-axis")}}- und {{cssxref("view-timeline-inset")}}-Eigenschaften.

Die {{cssxref("view-timeline-inset")}}-Argumente spezifizieren Einsätze (wenn positiv) oder Aussätze (wenn negativ), die den Start und das Ende des Scrollports anpassen. Sie werden verwendet, um die Scroll-Positionen zu bestimmen, bei denen das Element als "in Sicht" betrachtet wird, was die Länge der Animationstimeline bestimmt. Mit anderen Worten, anstatt am Startpunkt und Endpunkt des Scrollports zu beginnen und zu enden, erfolgt die Animation am Anfang und Ende der einsatzangepassten Ansicht.

Im Gegensatz zur Scroll-Timeline-Funktion `scroll()` gibt es kein `<scroller>`-Argument in der `view()`-Funktion, da die Sicht-Timeline immer das Subjekt innerhalb ihres nächstgelegenen übergeordneten Scroll-Containers verfolgt.

In diesem Beispiel können wir, da wir Einsatzwerte verwenden, die `from`- und `to`- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) verwenden.

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

Wie bei allen Animationen und Übergängen sollten immer die Benutzerpräferenzen für [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) berücksichtigt werden.

### Entfernen der Timeline einer Animation

Das Setzen von `animation-timeline: none` hebt die Assoziation des Elements mit allen Animationstimelines auf, einschließlich der standardmäßigen Zeit-basierten Dokument-Timeline, was bedeutet, dass das Element nicht animiert wird. Während einige Animationen notwendig sein können, können Sie Animationen basierend auf den `prefers-reduced-motion`-Einstellungen des Benutzers mit Hilfe von:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da die `animation`-Abkürzung die `animation-timeline` auf `auto` setzt, verwenden Sie einen Selektor mit ausreichender Spezifität, um sicherzustellen, dass Ihre `animation-timeline` nicht von Ihren `animation`-Abkürzungserklärungen überschrieben wird.

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
