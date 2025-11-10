---
title: Scrollgesteuerte Animationstafeln
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein häufiges UI-Muster umfasst Elemente, die sich animieren, wenn der Benutzer vertikal oder horizontal durch eine Seite scrollt. Diese _scrollgesteuerten Animationen_ treten als direkte Reaktion auf das Scrollen der Seite oder einen überfließenden Scroll-Container innerhalb einer Seite auf.

Die im Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), indem sie es ermöglichen, animierte Eigenschaftswerte in {{cssxref("@keyframes")}}-Animationen als Reaktion auf Benutzerinteraktionen zu definieren.

Dieser Leitfaden bietet eine Übersicht über die Nutzung von CSS zur Erstellung von scrollgesteuerten Animationstafeln und Animationen.

## Was ist eine scrollgesteuerte Animation?

Das Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Eigenschaften, die es ermöglichen, [CSS Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) mit dem Scrollen zu verknüpfen.

### Fortschritt der Zeitachse

Animationen können so eingestellt werden, dass sie auf einer _scrollbasierten Zeitachse_ fortschreiten, anstatt der Standard-Zeitdokument-Zeitachse, ohne dass JavaScript benötigt wird. CSS ermöglicht es uns, [zu definieren, welche Animationszeitachse](#animationszeitachsen) verwendet werden soll, einschließlich der Animation von Elementen durch Scrollen eines scrollbaren Elements anstatt durch den Zeitablauf.

### Leistungsverbesserungen

CSS scrollgesteuerte Animationen sind leistungsstark. JavaScript-scrollgesteuerte Animationen erfordern [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis-Listener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekte auf dem {{Glossary("main_thread", "Main Thread")}}, um Elemente im {{Glossary("Scroll_container#scrollport", "Scrollbereich")}} zu verfolgen. Jedes Mal, wenn Sie sich auf den Main Thread verlassen, um Effekte mit JavaScript darzustellen, besteht die Gefahr, dass der Main Thread blockiert wird, was zu einer nicht reagierenden Seite und einer schlechten Benutzererfahrung oder {{Glossary("jank", "Ruckeln")}} führen kann.

## Grundlagen

Scrollgesteuerte Animationen bauen auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) auf. Bevor Sie scrollgesteuerte Animationen erstellen, müssen Sie die CSS {{cssxref("@keyframes")}}-Animationen verstehen. Lesen Sie den [Anleitung zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using), um mehr zu erfahren.

In CSS werden Animationen erstellt, indem Keyframe-Animationen mit einem Element über die Eigenschaft {{cssxref("animation-name")}} (oder das {{cssxref("animation")}}-Shorthand) verknüpft werden. Standardmäßig laufen Animationen auf der Standard-Dokumentenzeitachse ab, die vom `from`-Keyframe zum `to`-Keyframe fortschreitet, während die Zeit vergeht, wobei die Animation so lange dauert, wie die durch den Wert der Eigenschaft {{cssxref("animation-duration")}} definierte Zeit. Wenn sie auf der Standard-Dokumentenzeitachse laufen, werden Animationen bis zum Abschluss ausgeführt, es sei denn, sie werden daran gehindert, zum Beispiel durch die {{cssxref("animation-play-state")}}-Einstellung auf `paused` oder das Entfernen des `animation-name` vom Element.

Scrollgesteuerte Animationen sind CSS-Animationen, die nicht auf der Standard-[DocumentTimeline](/de/docs/Web/API/DocumentTimeline) laufen. Stattdessen laufen sie auf einer Scroll-Fortschritts- oder Sichtbarkeits-Fortschritts-Zeitachse, die vom Scrollen des Inhalts eines Elements angetrieben wird. Es gibt eine direkte Verbindung zwischen der Scroll-Aktion des Benutzers und dem Fortschritt der Animation entlang der `@keyframe`-Keyframes. Während der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch die Keyframe-Fortschreitung. Wenn das Scrollen angehalten wird, pausiert die Animation, als ob `animation-play-state` auf `pause` gesetzt wäre.

## Animationszeitachsen

Die im [CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations) definierte {{cssxref("animation-timeline")}}-Eigenschaft wird verwendet, um die für die Animation verwendete Zeitachse festzulegen.

Das Modul [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Funktionen zum Setzen der `animation-timeline` als Scroll-Fortschritts- oder Sichtbarkeits-Fortschritts-Zeitachse. Sie können ein Element explizit [als Zeitlinien-Controller benennen](#named_timelines), indem Sie die Eigenschaften `scroll-timeline-*` und `view-timeline-*` verwenden und diesen Namen dann als `animation-timeline` eines untergeordneten Elements festlegen. Sie können auch _anonyme Scroll-Fortschritts-Zeitachsen_ und _anonyme Sichtbarkeits-Fortschritts-Zeitachsen_ mithilfe der Funktionen [`scroll()`](#scroll-progress_timelines) und [`view()`](#view-progress_timelines) definieren.

Alternativ kann die `animation-timeline`-Eigenschaft verwendet werden, um explizit anzugeben, dass die [Standard-Dokumentenzeitachse verwendet werden soll](#regular_css_animations_default_document_timeline) oder zu spezifizieren, dass eine Animation keine Zeitachse hat und daher überhaupt nicht stattfinden sollte.

### Reguläre CSS-Animationen: Standard-Dokumentenzeitachse

Durch explizites Festlegen der `animation-timeline` auf `auto` oder Weglassen der Eigenschaft und deren Zurücksetzen auf `auto` wird die Zeitachse auf die Standard-Dokumentenzeitachse eingestellt. Bei diesem Standardwert wird der Fortschritt der Animation durch die {{cssxref("animation-duration")}}, die {{cssxref("animation-delay")}} und die Zeit, die seit der Verknüpfung der Animation mit dem Element über die `animation-name`-Eigenschaft vergangen ist, bestimmt. Die zeitbasierte Dokumentenzeitachse ist die Zeitachse, die traditionell mit CSS-Animationen assoziiert wird.

```css live-sample___regular
:checked ~ .container > .item {
  animation-name: action;
  animation-duration: 3s;
  animation-delay: 500ms;
  animation-timeline: auto;
}
```

Wir erstellen eine Drehungs-Keyframe-Animation namens `action`:

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

Versuchen Sie, das Kontrollkästchen zu aktivieren. In den ersten halben Sekunden der Animationsverzögerung passiert nichts. Dann, sobald die Animation beginnt, springt das Kästchen zu einer 45-Grad-Drehung, und es wird drei Sekunden dauern, um zusätzliche 720 Grad, oder zwei weitere volle Umdrehungen, zu drehen. Nach insgesamt dreieinhalb Sekunden endet die Animation und das `<div>` kehrt in seinen Standardzustand ohne Drehung zurück.

> [!NOTE]
> Die `animation-timeline` wird durch die {{cssxref("animation")}}-Shorthand-Eigenschaft auf den Standardwert `auto` zurückgesetzt, kann jedoch nicht mit dem Shorthand gesetzt werden. Daher deklarieren Sie bei der Erstellung von scrollgesteuerten Animationen die `animation-timeline` immer nach allen `animation`-Shorthand-Deklarationen, um den gewünschten Effekt zu erzielen.

## Scroll-Fortschritts-Zeitachsen

Mit der _Scroll-Fortschritts-Zeitachse_ verläuft die Zeitachse basierend auf dem Scrollen des scrollbaren Elements (_Scroller_) von oben nach unten (oder von links nach rechts) und zurück. Standardmäßig wird die Position im Scrollbereich in einen Fortschrittsprozentsatz umgewandelt — `0%` am Anfang und `100%` am Ende. <!--Dieser [Animationsbereich kann über die {{cssxref("animation-range")}}-Eigenschaften kontrolliert werden](#controlling_the_animation_range).-->

Um eine Scroll-Fortschritts-Zeitachse zu erstellen, muss der `animation-timeline`-Wert auf den Scroller verweisen, der benannt oder anonym sein kann.

### Benannte Scroll-Fortschritts-Zeitachsen

Eine _benannte Scroll-Fortschritts-Zeitachse_ ist eine, bei der der Scroller explizit mithilfe der Eigenschaft {{cssxref("scroll-timeline-name")}} (oder dem {{cssxref("scroll-timeline")}}-Shorthand) benannt wird. Der Name ist ein {{cssxref("dashed-ident")}}. Der Scroller wird mit dem animierten Element verknüpft, indem dessen `scroll-timeline-name` als Wert der `animation-timeline`-Eigenschaft des Elements angegeben wird.

Unser HTML umfasst drei Elemente: das `item`, das wir animieren werden; dessen `container`, den wir scrollen werden; und den Scroller. Der `container` muss groß genug sein, um seinen `scroller`-Elternelement zu überlaufen: Wenn kein Scrollen vorhanden ist, existiert keine Scroll-Zeitachse.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir stellen einige grundlegende Stile bereit. Die wichtigen sind das Setzen einer Höhe am Container, die größer als der Scroller ist, und dann das Setzen von Überlauf, um Scrollen zu ermöglichen:

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

Das Setzen einer `animation-timeline` auf das animierte Element, die mit dem `scroll-timeline-name` eines übergeordneten Elements übereinstimmt, ist das, was die benannte Scroll-Fortschritts-Zeitachse erzeugt. Wir müssen auch eine Animation einfügen, was wir tun, indem wir den Wert der `animation-name`-Komponente des {{cssxref("animation")}}-Shorthands auf den {{cssxref("custom-ident")}}-Namen unserer Keyframe-Animation setzen:

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

In diesem Fall haben wir kein Kontrollkästchen, da der Fortschritt der `action`-Animation durch das Scrollen des überfließenden Scrollers gesteuert wird, das, anders als die Zeit, nicht abläuft.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Bevor Scrollen auftritt, befindet sich die Position des Containers oben im Scroller, und die Animation befindet sich beim 0%-Keyframe. Versuchen Sie nach unten zu scrollen. Während Sie scrollen, verläuft die Animation durch die Zeitachse und dreht sich zusätzliche 720 Grad. Wenn Sie nicht mehr scrollen können, befindet sich der Fortschritt der Animation bei 100% oder dem `to`-Keyframe. Das animierte Element kehrt nicht zu seiner Standarddrehung zurück, es sei denn, der Scroller wird wieder nach oben gescrollt.

#### Animationsdauer

Sie haben vielleicht bemerkt, dass die `animation-duration`-Komponente des `animation`-Shorthands auf `1ms` eingestellt war. Bei der Erstellung von [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) beeinflusst der `animation-duration`-Wert die Dauer der Animation nicht und sollte nicht notwendig sein. Allerdings können Dauern nicht-lineare Sichtbarkeits-Fortschritts-Animations-Tafeln beeinflussen, und Firefox benötigt eine nicht-null `animation-duration`, um eine Animation auf ein Element anzuwenden. Aus diesen Gründen ist es gängige Praxis, die `animation-duration` auf `1ms` einzustellen.

Durch das Einstellen von `animation-duration: 1ms` wird sichergestellt, dass die Animation in Firefox funktioniert, der Animationseffekt in allen Browsern konsistent ist und die Animation versteckt wird, falls ein Browser keine Sichtbarkeits-Fortschritts-Animations-Tafeln unterstützt. Wenn der Browser Keyframe-Animationen unterstützt, wird die Animation für den Benutzer nicht sichtbar sein. Allerdings findet die Animation dennoch statt und Animationsevents werden ausgelöst.

### Anonyme Scroll-Fortschritts-Zeitachsen

Sie müssen Ihre Scroll-Fortschritts-Zeitachse nicht benennen. Stattdessen können Sie eine _anonyme Scroll-Fortschritts-Zeitachse_ mit der Animation verknüpfen. In diesem Fall wird die `animation-timeline` des zu animierenden Elements auf eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion gesetzt. Die Funktion wählt den Scroller aus, der die Scroll-Fortschritts-Zeitachse bereitstellt, und die Scroll-Achse, die basierend auf den optionalen Argumenten, die Sie übergeben, verwendet werden soll. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller)-Schlüsselwort, das die Beziehung des Scroller-Elements zum aktuellen Element (`nearest`, `root` oder `self`) definiert. Der andere ist der Scrollbalken-[`<axis>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis)-Wert (`block`, `inline`, `y` oder `x`).

Dieses Beispiel verwendet alle dieselben CSS wie das vorherige Beispiel, außer der `animation-timeline`, die wir auf eine `scroll()`-Funktion setzen. Wir überschreiben auch die Größe des Containers, um die Scrollrichtung zu ändern:

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

Wir setzen eine {{cssxref("inline-size")}} auf den Container, damit er in der Inline-Richtung überläuft, und setzen die {{cssxref("block-size")}} auf `100%`, damit er nicht mehr in der Blockrichtung überläuft. Versuchen Sie in der Inline-Richtung zu scrollen.

## Sichtbarkeits-Fortschritts-Zeitachsen

Sie können eine Animation auch basierend auf der Veränderung der Sichtbarkeit eines Elements innerhalb eines Scrollers fortschreiten lassen — dies wird über _Sichtbarkeits-Fortschritts-Zeitachsen_ durchgeführt. Anstatt den Bildlaufversatz eines Scrollcontainers zu verfolgen, verfolgen Sichtbarkeits-Fortschritts-Zeitachsen die relative Position eines Elements, des _Subjekts_, innerhalb eines Scrollports. Der Fortschritt der Keyframes einer Animation basiert auf der _Sichtbarkeit_ des Subjekts innerhalb des Scrollers. Im Gegensatz zu Scroll-Fortschritts-Zeitachsen können Sie bei Sichtbarkeits-Fortschritts-Zeitachsen den Scroller nicht angeben — die Sichtbarkeit des Subjekts wird immer innerhalb seines nächstgelegenen Scroller-Vorfahren verfolgt.

Eine Sichtbarkeits-Fortschritts-Zeitachsen-Animation tritt nur auf, wenn das Element innerhalb seines Scrollports sichtbar ist. Der Fortschritt der Zeitachse beginnt bei `0%`, wenn das verfolgte Subjekt beginnt, mit dem Block- oder Inline-Endrand den Scrollport zu durchschneiden. Die `100%` werden erreicht, wenn das Subjekt den Scrollport mit dem Block- oder Inline-Starrand verlässt.

Da `100%` im Allgemeinen erreicht werden, wenn das Element den Ansichtsbereich verlässt, möchten Sie wahrscheinlich den finalen Effekt Ihrer Animation in einem Keyframe-Block festlegen, der weit vor dem Ende der Animation auftritt. Sie können Ihren abgeschlossenen Effekt innerhalb des `20%`, `50%` oder `80%`-Keyframe-Blocks festlegen, anstatt den `to`- oder `100%`-Keyframe zu verwenden, um sicherzustellen, dass das Element immer noch im Blickfeld zu Ende animiert.

Mit Sichtbarkeits-Fortschritts-Zeitachsen können Sie den Sichtbarkeitsbereich der Sichtbarkeits-Fortschritts-Zeitachse anpassen.
Verwenden Sie {{cssxref("view-timeline-inset")}}, ein Teil des {{cssxref("view-timeline")}}-Shorthands, um anzupassen, wann das Subjekt als sichtbar gilt. Der Standardwert ist `auto`. Die Wirkung eines jeden von `auto` abweichenden Einfügewerts ist so, als ob Sie die Ränder des Scrollports verschieben: ein positiver Einfügewert erzeugt eine innere Anpassung, ein negativer eine äußere.

Ähnlich wie bei Scroll-Fortschritts-Zeitachsen kann die Sichtbarkeits-Fortschritts-Zeitachse benannt oder anonym sein.

### Benannte Sichtbarkeits-Fortschritts-Zeitachse

Eine _benannte Sichtbarkeits-Fortschritts-Zeitachse_ ist eine, bei der das Subjekt explizit mit der {{cssxref("view-timeline-name")}}-Eigenschaft benannt wird, einem Bestandteil des `view-timeline`-Shorthands. Der `<dashed-ident>`-Name wird dann mit dem zu animierenden Element verknüpft, indem er als Wert der `animation-timeline`-Eigenschaft dieses Elements angegeben wird.

Bei benannten Sichtbarkeits-Fortschritts-Zeitachsen muss das zu animierende Element nicht identisch mit dem Subjekt sein. Mit anderen Worten, das Element, das die Zeitachse steuert, muss nicht mit dem Element identisch sein, das animiert wird. Dies bedeutet, dass Sie ein Element basierend auf der Bewegung eines anderen Elements innerhalb seines scrollbaren Containers animieren können.

Hier verwenden wir die {{cssxref("view-timeline-name")}}-Eigenschaft, um ein Element zu benennen und es als Quelle einer Sichtbarkeits-Fortschritts-Zeitachse zu identifizieren. Wir setzen dann diesen Namen als Wert der `animation-timeline`-Eigenschaft.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --aName;
  animation-timeline: --aName;
}
```

Wir haben die Animation **vor** der Animations-Zeitachse angewendet, da das `animation` die `animation-timeline` auf `auto` zurücksetzt.

Die Animation unterscheidet sich leicht von den vorherigen Beispielen dadurch, dass der Dreheffekt bei `20%` beginnt und bei `80%` der Laufzeit der Animation endet; dies bedeutet, dass sich das Element nicht aktiv dreht, wenn es zuerst sichtbar wird, und dass es aufhört zu drehen, bevor es vollständig aus dem Blickfeld ist.

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

Scrollen Sie das Element ins Blickfeld. Beachten Sie, dass das Element durch die `@keyframes`-Animation animiert wird, während es sich durch den sichtbaren Bereich seines Scroller-Vorfahren bewegt.

### Anonyme Sichtbarkeits-Fortschritts-Zeitachse: die `view()`-Funktion

Alternativ kann eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der `animation-timeline`-Eigenschaft gesetzt werden, um anzugeben, dass die Animationszeitachse eines Elements eine _anonyme Sichtbarkeits-Fortschritts-Zeitachse_ ist. Dies führt dazu, dass das Element basierend auf seiner Position innerhalb seines nächstgelegenen Elter-Scrollers animiert wird.

Die `view()`-Funktion erstellt eine Sichtbarkeits-Zeitachse. Sie verknüpfen die Zeitachse mit dem Element, das Sie animieren möchten, indem Sie die `animation-timeline`-Eigenschaft verwenden. Die Funktion erstellt eine Sichtbarkeits-Zeitachse für jedes Element, das durch den Selektor übereinstimmt.

In diesem Beispiel definieren wir erneut die `animation` vor der `animation-timeline`, damit die Zeitachse nicht zurückgesetzt wird. Wir verwenden dann eine `view()`-Funktion ohne Argumente. Wir spezifizieren keinen Scroller, da per definitionem die Sichtbarkeit des Subjekts von seinem nächstgelegenen Elter-Scroller-Vorfahren verfolgt wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der `view()`-Funktion

Die `view()`-Funktion nimmt bis zu drei optionale Werte als Argumente an:

- Null oder einer `<axis>`-Parameter. Wenn gesetzt, gibt dies die Scrollachse an, entlang der die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder null, ein oder zwei {{cssxref("length-percentage")}}-Einfügewerte. Wenn gesetzt, geben diese Werte Versätze für den Anfang und/oder das Ende des Scrollports an.

Die Deklaration von `view()` entspricht `view(block auto)`, was `block` als die Achse des übergeordneten Elements definiert, die die Zeitachse bereitstellt, und die {{cssxref("scroll-padding")}}, die im Allgemeinen auf `0` als die Einfügemargen innerhalb des sichtbaren Bereichs gesetzt wird, in denen die Animation beginnt und endet.

Die Funktion setzt die Werte der {{cssxref("view-timeline-axis")}}- und {{cssxref("view-timeline-inset")}}-Eigenschaften.

Die Argumente für {{cssxref("view-timeline-inset")}} spezifizieren Einfügungen (wenn positiv) oder Auszüge (wenn negativ), die den Anfang und das Ende des Scrollports anpassen. Sie werden verwendet, um die Scroll-Positionen zu bestimmen, bei denen das Element als "sichtbar" angesehen wird, was die Dauer der Animations-Zeitachse bestimmt. Mit anderen Worten, anstatt am Anfangsrand des Scrollports zu starten und am Endrand zu enden, erfolgt die Animation am Anfang und Ende der durch Einfügungs-Anpassung bestimmten Ansicht.

Im Gegensatz zur `scroll()`-Funktion der Scroll-Zeitachse gibt es im `view()`-Funktion keinen `<scroller>`-Parameter, da die Zeitachse der Ansicht immer das Subjekt innerhalb seines nächstgelegenen Elter-Scrollcontainers verfolgt.

In diesem Beispiel, da wir Einfügewerte verwenden, können wir die `from`- und `to`-Keyframe-Selektoren verwenden.

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

Wie bei allen Animationen und Übergängen sollten Sie stets die [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)-Einstellungen eines Benutzers berücksichtigen.

### Entfernen einer Zeitachse einer Animation

Das Setzen von `animation-timeline: none` löst das Element von allen Animations-Zeitachsen, einschließlich der Standard-zeitbasierten Dokumentenzeitachse, wodurch das Element nicht animiert wird. Obwohl einige Animationen notwendig sein können, können Sie Animationen basierend auf den `prefers-reduced-motion`-Einstellungen des Benutzers entfernen:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da das `animation`-Shorthand die `animation-timeline` auf `auto` setzt, verwenden Sie einen Selektor mit genügend Spezifität, um sicherzustellen, dass Ihre `animation-timeline` nicht von Ihren `animation`-Shorthand-Deklarationen überschrieben wird.

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
