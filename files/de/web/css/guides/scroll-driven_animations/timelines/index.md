---
title: Animationszeitleisten beim Scrollen
slug: Web/CSS/Guides/Scroll-driven_animations/Timelines
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Ein häufiges UI-Muster sind Elemente, die animiert werden, während Benutzer vertikal oder horizontal durch eine Seite scrollen. Diese _scrollgesteuerten Animationen_ reagieren unmittelbar auf das Scrollen der Seite oder eines überlaufenden Scroll-Containers innerhalb der Seite.

Die im Modul [CSS-Animationen beim Scrollen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definierten Eigenschaften erweitern [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations): Sie ermöglichen es, die in {{cssxref("@keyframes")}}-Animationen definierten Eigenschaftswerte als Reaktion auf Benutzerinteraktionen zu animieren.

Dieser Leitfaden gibt einen Überblick darüber, wie Sie mit CSS Animationszeitleisten und Animationen erstellen, die durch Scrollen gesteuert werden.

## Was ist eine scrollgesteuerte Animation?

Das Modul [CSS-Animationen beim Scrollen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Eigenschaften, mit denen sich [CSS-Keyframe-Animationen](/de/docs/Web/CSS/Guides/Animations/Using#defining_an_animation_sequence_using_keyframes) an das Scrollen koppeln lassen.

### Verlauf der Zeitleiste

Animationen können statt auf der standardmäßigen zeitbasierten Dokumentzeitleiste auf einer _scrollbasierten Zeitleiste_ ablaufen – ohne JavaScript. Mit CSS können Sie [festlegen, welche Animationszeitleiste](#animationszeitleisten) verwendet wird. So lassen sich Elemente durch das Scrollen eines scrollbaren Elements animieren, statt durch den Zeitverlauf.

### Leistungsvorteile

Scrollgesteuerte CSS-Animationen sind leistungsfähig. Für scrollgesteuerte Animationen mit JavaScript sind [`scroll`](/de/docs/Web/API/Document/scroll_event)-Event-Listener und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekte auf dem {{Glossary("main_thread", "Hauptthread")}} erforderlich, um Elemente innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} zu verfolgen. Wenn Sie Effekte mit JavaScript auf dem Hauptthread rendern, besteht die Gefahr, dass der Hauptthread blockiert wird. Das kann dazu führen, dass die Seite nicht mehr reagiert und die Benutzererfahrung leidet, oder dass {{Glossary("jank", "Ruckeln")}} auftritt.

## Grundlagen

Scrollgesteuerte Animationen bauen auf [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und der [Web Animations API](/de/docs/Web/API/Web_Animations_API) auf. Bevor Sie scrollgesteuerte Animationen erstellen, sollten Sie CSS-{{cssxref("@keyframes")}}-Animationen verstehen. Weitere Informationen finden Sie im [Leitfaden zur Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using).

In CSS werden Animationen erstellt, indem Sie einem Element mithilfe der Eigenschaft {{cssxref("animation-name")}} (oder der Kurzschreibweise {{cssxref("animation")}}) eine Keyframe-Animation zuweisen. Standardmäßig laufen Animationen auf der Dokumentzeitleiste ab: Mit fortschreitender Zeit durchlaufen sie die Keyframes von `from` bis `to`. Die Dauer wird durch den Wert der Eigenschaft {{cssxref("animation-duration")}} bestimmt. Animationen auf der standardmäßigen Dokumentzeitleiste laufen bis zum Ende, sofern sie nicht daran gehindert werden – beispielsweise indem {{cssxref("animation-play-state")}} auf `paused` gesetzt oder `animation-name` vom Element entfernt wird.

Scrollgesteuerte Animationen sind CSS-Animationen, die nicht auf der standardmäßigen [DocumentTimeline](/de/docs/Web/API/DocumentTimeline) ablaufen. Stattdessen verwenden sie eine Scrollfortschritts- oder Ansichtsfortschrittszeitleiste, die durch das Scrollen des Inhalts eines Elements gesteuert wird. Zwischen der Scrollbewegung des Benutzers und dem Fortschritt der Animation durch die `@keyframe`-Keyframes besteht eine direkte Verbindung. Wenn der Benutzer nach oben, unten, links oder rechts scrollt, bewegt sich die Animation vorwärts oder rückwärts durch die Keyframes. Wird das Scrollen angehalten, hält auch die Animation an – als wäre `animation-play-state` auf `pause` gesetzt.

## Animationszeitleisten

Mit der im Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) definierten Eigenschaft {{cssxref("animation-timeline")}} legen Sie die Zeitleiste fest, die für eine Animation verwendet wird.

Das Modul [CSS-Animationen beim Scrollen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) definiert Funktionen, mit denen sich `animation-timeline` auf eine Scrollfortschritts- oder Ansichtsfortschrittszeitleiste setzen lässt. Sie können ein Element mithilfe der Eigenschaften `scroll-timeline-*` und `view-timeline-*` ausdrücklich [als Steuerungselement einer benannten Zeitleiste festlegen](#benannte_scrollfortschrittszeitleisten) und diesen Namen anschließend als `animation-timeline` eines untergeordneten Elements verwenden. Mit den Funktionen [`scroll()`](#scrollfortschrittszeitleisten) und [`view()`](#ansichtsfortschrittszeitleisten) können Sie außerdem _anonyme Scrollfortschrittszeitleisten_ und _anonyme Ansichtsfortschrittszeitleisten_ definieren.

Alternativ können Sie mit `animation-timeline` ausdrücklich festlegen, dass die [standardmäßige Dokumentzeitleiste verwendet wird](#regular_css_animations_default_document_timeline) oder dass die [Animation keine Zeitleiste hat](#removing_an_animations_timeline) und daher gar nicht stattfindet.

### Reguläre CSS-Animationen: standardmäßige Dokumentzeitleiste

Wenn Sie `animation-timeline` ausdrücklich auf `auto` setzen oder die Eigenschaft weglassen und damit den Standardwert `auto` verwenden, wird die standardmäßige Dokumentzeitleiste genutzt. Bei diesem Wert hängt der Animationsfortschritt von {{cssxref("animation-duration")}}, {{cssxref("animation-delay")}} und der Zeit ab, die vergangen ist, seit die Animation dem Element über `animation-name` zugewiesen wurde. Diese zeitbasierte Dokumentzeitleiste wird traditionell für CSS-Animationen verwendet.

```css live-sample___regular
:checked ~ .container > .item {
  animation-name: action;
  animation-duration: 3s;
  animation-delay: 500ms;
  animation-timeline: auto;
}
```

Wir erstellen eine Keyframe-Animation namens `action`, die eine Drehung ausführt:

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

Wenn das Kontrollkästchen aktiviert ist, wird die Animation `action` auf das Element angewendet. Ist es deaktiviert, wird das `<div>` nicht animiert.

{{EmbedLiveSample("regular", "100%", "150")}}

Aktivieren Sie das Kontrollkästchen. Während der Animationsverzögerung von einer halben Sekunde geschieht nichts. Sobald die Animation beginnt, springt die Box zu einer Drehung um 45 Grad. Anschließend dreht sie sich innerhalb von 3 Sekunden um weitere 720 Grad, also um zwei vollständige Umdrehungen. Nach insgesamt dreieinhalb Sekunden endet die Animation und das `<div>` kehrt in seinen nicht gedrehten Ausgangszustand zurück.

> [!NOTE]
> Die Kurzschreibweise {{cssxref("animation")}} setzt `animation-timeline` auf den Standardwert `auto` zurück. Die Zeitleiste selbst kann jedoch nicht über die Kurzschreibweise festgelegt werden. Deklarieren Sie `animation-timeline` bei scrollgesteuerten Animationen deshalb immer nach etwaigen `animation`-Deklarationen, damit der gewünschte Effekt eintritt.

## Scrollfortschrittszeitleisten

Bei einer _Scrollfortschrittszeitleiste_ richtet sich der Fortschritt der Zeitleiste danach, wie weit das scrollbare Element (_Scroller_) von oben nach unten (oder von links nach rechts) und wieder zurück gescrollt wird. Standardmäßig wird die Position im Scrollbereich in einen prozentualen Fortschritt umgerechnet: `0%` am Anfang und `100%` am Ende. <!--This [animation range can be controlled](#controlling_the_animation_range) via the {{cssxref("animation-range")}} properties.-->

Um eine Scrollfortschrittszeitleiste zu erstellen, muss der Wert von `animation-timeline` auf den Scroller verweisen. Dieser kann benannt oder anonym sein.

### Benannte Scrollfortschrittszeitleisten

Bei einer _benannten Scrollfortschrittszeitleiste_ wird der Scroller mithilfe der Eigenschaft {{cssxref("scroll-timeline-name")}} (oder der Kurzschreibweise {{cssxref("scroll-timeline")}}) ausdrücklich benannt. Der Name ist ein {{cssxref("dashed-ident")}}. Die Verbindung zwischen dem Scroller und dem zu animierenden Element wird hergestellt, indem dessen `scroll-timeline-name` als Wert der Eigenschaft `animation-timeline` des zu animierenden Elements angegeben wird.

Unser HTML enthält drei Elemente: `item`, das wir animieren, `container`, dessen Inhalt gescrollt wird, und den Scroller. `container` muss so groß sein, dass es über sein übergeordnetes Element `scroller` hinausragt: Ohne Scrollen gibt es keine Scrollzeitleiste.

```html live-sample___named_scroll live-sample___anon_scroll
<main class="scroller">
  <div class="container">
    <span class="item"></span>
  </div>
</main>
```

Wir legen einige grundlegende Stile fest. Entscheidend ist, dass der Container höher als der Scroller ist und `overflow` so gesetzt wird, dass Scrollen möglich ist:

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

Eine benannte Scrollfortschrittszeitleiste entsteht, wenn `animation-timeline` beim animierten Element auf den `scroll-timeline-name` eines seiner Vorfahren gesetzt wird. Außerdem benötigen wir eine Animation. Dazu setzen wir die Komponente `animation-name` der Kurzschreibweise {{cssxref("animation")}} auf den {{cssxref("custom-ident")}}-Namen unserer Keyframe-Animation:

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

Hier benötigen wir kein Kontrollkästchen: Der Fortschritt der Animation `action` wird durch das Scrollen des überlaufenden Scrollers gesteuert. Anders als Zeit läuft dessen Scrollbereich nicht ab.

{{EmbedLiveSample("named_scroll", "100%", "150")}}

Bevor Sie scrollen, befindet sich der Container am oberen Rand des Scrollers und die Animation steht beim Keyframe `0%`. Scrollen Sie nach unten. Dabei schreitet die Animation entlang der Zeitleiste fort und das Element dreht sich um weitere 720 Grad. Wenn Sie nicht mehr weiter scrollen können, hat die Animation das Keyframe `100%` beziehungsweise `to` erreicht. Das animierte Element kehrt erst zu seiner ursprünglichen Drehung zurück, wenn Sie den Scroller wieder ganz nach oben scrollen.

#### Animationsdauer

Vielleicht ist Ihnen aufgefallen, dass die Komponente {{cssxref("animation-duration")}} der Kurzschreibweise `animation` auf `1ms` gesetzt wurde. Beim Erstellen von [scrollgesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) beeinflusst ein Wert für `animation-duration` die Dauer der Animation nicht und sollte daher eigentlich nicht nötig sein. Allerdings können Dauerangaben nichtlineare Ansichtsfortschrittszeitleisten beeinflussen. Zudem benötigt Firefox eine `animation-duration` ungleich null, um eine Animation auf ein Element anzuwenden. Deshalb ist es üblich, `animation-duration` auf `1ms` zu setzen.

Mit `animation-duration: 1ms` stellen Sie sicher, dass die Animation in Firefox funktioniert, der Animationseffekt in allen Browsern einheitlich ist und die Animation verborgen bleibt, wenn ein Browser Ansichtsfortschrittszeitleisten nicht unterstützt. Wenn der Browser Keyframe-Animationen unterstützt, ist die Animation für Benutzer nicht sichtbar. Sie findet dennoch statt und Animationsereignisse werden ausgelöst.

### Anonyme Scrollfortschrittszeitleisten

Sie müssen Ihre Scrollfortschrittszeitleiste nicht benennen. Stattdessen können Sie der Animation eine _anonyme Scrollfortschrittszeitleiste_ zuweisen. Dazu setzen Sie `animation-timeline` beim zu animierenden Element auf eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion. Anhand der optionalen Argumente wählt die Funktion den Scroller aus, der die Scrollfortschrittszeitleiste bereitstellt, sowie die zu verwendende Scrollachse. Ein Parameter ist ein [`<scroller>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#scroller)-Schlüsselwort, das die Beziehung des Scrollers zum aktuellen Element beschreibt (`nearest`, `root` oder `self`). Der andere ist ein Wert für die Bildlaufleistenachse [`<axis>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll#axis) (`block`, `inline`, `y` oder `x`).

Dieses Beispiel verwendet dasselbe CSS wie das vorherige, mit Ausnahme von `animation-timeline`, das wir auf eine `scroll()`-Funktion setzen. Außerdem überschreiben wir die Größe des Containers, um die Scrollrichtung zu ändern:

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

Wir setzen {{cssxref("inline-size")}} für den Container, damit er in Inline-Richtung überläuft, und {{cssxref("block-size")}} auf `100%`, damit er in Blockrichtung nicht mehr überläuft. Scrollen Sie in Inline-Richtung.

## Ansichtsfortschrittszeitleisten

Sie können den Fortschritt einer Animation auch an die Sichtbarkeit eines Elements innerhalb eines Scrollers koppeln – mithilfe von _Ansichtsfortschrittszeitleisten_. Anders als Scrollfortschrittszeitleisten verfolgen sie nicht den Scrollversatz eines Scroll-Containers, sondern die relative Position eines Elements, des sogenannten _Subjekts_, innerhalb eines Scrollports. Wie weit die Animation ihre Keyframes durchlaufen hat, richtet sich nach der _Sichtbarkeit_ des Subjekts im Scroller. Bei Ansichtsfortschrittszeitleisten können Sie den Scroller nicht selbst festlegen: Die Sichtbarkeit des Subjekts wird immer innerhalb des nächstgelegenen übergeordneten Scrollers verfolgt.

Eine Animation mit Ansichtsfortschrittszeitleiste findet nur statt, während das Element innerhalb seines Scrollports sichtbar ist. Der Zeitleistenfortschritt beginnt bei `0%`, wenn das verfolgte Subjekt den Scrollport an dessen Endkante in Block- oder Inline-Richtung zu schneiden beginnt. `100%` werden erreicht, wenn das Subjekt den Scrollport an dessen Anfangskante in Block- oder Inline-Richtung verlässt.

Da `100%` in der Regel erst erreicht werden, wenn das Element den sichtbaren Bereich verlässt, sollten Sie den Endzustand Ihrer Animation wahrscheinlich in einem Keyframe-Block festlegen, der deutlich vor dem Ende der Animation liegt. Verwenden Sie beispielsweise den Keyframe-Block `20%`, `50%` oder `80%` statt `to` oder `100%`, damit die Animation abgeschlossen ist, solange das Element noch sichtbar ist.

Bei Ansichtsfortschrittszeitleisten können Sie den Sichtbarkeitsbereich anpassen. Mit {{cssxref("view-timeline-inset")}}, einem Bestandteil der Kurzschreibweise {{cssxref("view-timeline")}}, bestimmen Sie, ab wann das Subjekt als sichtbar gilt. Der Standardwert ist `auto`. Ein anderer Wert wirkt so, als würden Sie die Kanten des Scrollports verschieben: Ein positiver Inset-Wert verschiebt sie nach innen, ein negativer nach außen.

Wie Scrollfortschrittszeitleisten können auch Ansichtsfortschrittszeitleisten benannt oder anonym sein.

### Benannte Ansichtsfortschrittszeitleiste

Bei einer _benannten Ansichtsfortschrittszeitleiste_ wird das Subjekt ausdrücklich mithilfe der Eigenschaft {{cssxref("view-timeline-name")}} benannt, die Teil der Kurzschreibweise `view-timeline` ist. Der Name `<dashed-ident>` wird anschließend mit dem zu animierenden Element verknüpft, indem Sie ihn als Wert von dessen Eigenschaft `animation-timeline` angeben.

Bei benannten Ansichtsfortschrittszeitleisten muss das zu animierende Element nicht mit dem Subjekt identisch sein. Das Element, das die Zeitleiste steuert, kann also ein anderes sein als das animierte Element. So können Sie ein Element anhand der Bewegung eines anderen Elements innerhalb seines scrollbaren Containers animieren.

Hier benennen wir ein Element mit der Eigenschaft {{cssxref("view-timeline-name")}} und bestimmen es damit selbst zur Quelle einer Ansichtsfortschrittszeitleiste. Anschließend setzen wir diesen Namen als Wert von `animation-timeline`.

```css live-sample___named_view
.item {
  animation: action 1ms linear;

  view-timeline-name: --a-name;
  animation-timeline: --a-name;
}
```

Wir haben die Animation **vor** der Animationszeitleiste festgelegt, da `animation` die Eigenschaft `animation-timeline` auf `auto` zurücksetzt.

Die Animation unterscheidet sich etwas von den vorherigen Beispielen: Die Drehung beginnt bei `20%` und endet bei `80%` des Animationsverlaufs. Das Element dreht sich daher noch nicht, wenn es gerade erst sichtbar wird, und hört damit auf, bevor es vollständig aus dem sichtbaren Bereich verschwindet.

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

Scrollen Sie das Element in den sichtbaren Bereich. Beachten Sie, wie es die `@keyframes`-Animation durchläuft, während es sich durch den sichtbaren Bereich seines übergeordneten Scrollers bewegt.

### Anonyme Ansichtsfortschrittszeitleiste: die Funktion `view()`

Alternativ können Sie eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert von `animation-timeline` angeben, um eine _anonyme Ansichtsfortschrittszeitleiste_ für ein Element festzulegen. Dadurch wird das Element abhängig von seiner Position innerhalb des nächstgelegenen übergeordneten Scrollers animiert.

Die Funktion `view()` erstellt eine Ansichtszeitleiste. Mit der Eigenschaft `animation-timeline` weisen Sie diese Zeitleiste dem Element zu, das Sie animieren möchten. Die Funktion erstellt für jedes Element, auf das der Selektor zutrifft, eine Ansichtszeitleiste.

In diesem Beispiel definieren wir `animation` erneut vor `animation-timeline`, damit die Zeitleiste nicht zurückgesetzt wird. Anschließend verwenden wir `view()` ohne Argumente. Einen Scroller geben wir nicht an, da die Sichtbarkeit des Subjekts definitionsgemäß im nächstgelegenen übergeordneten Scroller verfolgt wird.

```css live-sample___anon_view
.item {
  animation: action 1ms linear;
  animation-timeline: view();
}
```

{{EmbedLiveSample("anon_view", "100%", "250")}}

### Parameter der Funktion `view()`

Die Funktion `view()` akzeptiert bis zu drei optionale Werte als Argumente:

- Null oder einen `<axis>`-Parameter. Falls angegeben, legt er die Scrollachse fest, entlang der die Animation fortschreitet.
- Entweder das Schlüsselwort `auto` oder null, einen oder zwei {{cssxref("length-percentage")}}-Inset-Werte. Falls angegeben, legen diese Werte Versätze für den Anfang und/oder das Ende des Scrollports fest.

Die Angabe von `view()` entspricht `view(block auto)`. Dabei wird `block` als Achse des übergeordneten Elements festgelegt, das die Zeitleiste bereitstellt. Als Insets innerhalb des sichtbaren Bereichs, an denen die Animation beginnt und endet, dient {{cssxref("scroll-padding")}}, dessen Standardwert in der Regel `0` ist.

Die Funktion legt die Werte der Eigenschaften {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} fest.

Die Argumente von {{cssxref("view-timeline-inset")}} geben Insets (bei positiven Werten) oder Outsets (bei negativen Werten) an, die den Anfang und das Ende des Scrollports anpassen. Sie bestimmen damit die Scrollpositionen, an denen das Element als „sichtbar“ gilt, und somit die Länge der Animationszeitleiste. Anders ausgedrückt: Die Animation beginnt und endet an den durch die Inset-Werte angepassten Grenzen des sichtbaren Bereichs statt an den ursprünglichen Anfangs- und Endkanten des Scrollports.

Anders als die Funktion `scroll()` für Scrollzeitleisten besitzt `view()` kein `<scroller>`-Argument, da eine Ansichtszeitleiste das Subjekt immer innerhalb des nächstgelegenen übergeordneten Scroll-Containers verfolgt.

Da wir in diesem Beispiel Inset-Werte verwenden, können wir die [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) `from` und `to` verwenden.

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

## Hinweise zur Barrierefreiheit

Berücksichtigen Sie wie bei allen Animationen und Übergängen stets die Einstellung [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) der Benutzer.

### Zeitleiste einer Animation entfernen

Mit `animation-timeline: none` lösen Sie die Verknüpfung des Elements mit allen Animationszeitleisten, auch mit der standardmäßigen zeitbasierten Dokumentzeitleiste. Das Element wird dadurch nicht animiert. Auch wenn manche Animationen notwendig sein können, können Sie Animationen anhand der Einstellung `prefers-reduced-motion` des Benutzers wie folgt entfernen:

```css
@media (prefers-reduced-motion: reduce) {
  .optionalAnimations {
    animation-timeline: none;
  }
}
```

Da die Kurzschreibweise `animation` die Eigenschaft `animation-timeline` auf `auto` setzt, sollten Sie einen ausreichend spezifischen Selektor verwenden. So stellen Sie sicher, dass Ihre Angabe für `animation-timeline` nicht durch Deklarationen mit der Kurzschreibweise `animation` überschrieben wird.

## Siehe auch

- [Namen von Zeitleistenbereichen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- Modul [CSS-Animationen beim Scrollen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
