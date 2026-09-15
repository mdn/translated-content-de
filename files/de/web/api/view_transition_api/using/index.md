---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 6a5c66fd39deaf266d332f7e04a885751d1d691c
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erläutert die Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie Sie View Transitions erstellen und die Übergangsanimationen anpassen sowie wie Sie aktive View Transitions manipulieren können. Dies umfasst View Transitions sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Transition-Prozess

Sehen wir uns den Prozess an, nach dem eine View Transition funktioniert:

1. Eine View Transition wird ausgelöst. Wie dies erfolgt, hängt von der Art der View Transition ab:
   - Bei Übergängen innerhalb desselben Dokuments (SPAs) wird eine View Transition ausgelöst, indem die Funktion, welche die DOM-Aktualisierung für die View-Änderung auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird, oder im Fall von [elementbezogenen View Transitions](/de/docs/Web/API/View_Transition_API/Using_element-scoped) an [`element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition).
   - Bei dokumentübergreifenden Übergängen (MPAs) wird eine View Transition ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen denselben Origin haben und sich für die View Transition anmelden, indem sie in ihrem CSS eine At-Regel {{cssxref("@view-transition")}} mit einem `navigation`-Deskriptor von `auto` enthalten.
     > [!NOTE]
     > Eine aktive View Transition hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (die bei Übergängen innerhalb desselben Dokuments (SPA) beispielsweise von `startViewTransition()` zurückgegeben wird). Das `ViewTransition`-Objekt enthält mehrere Promises, mit denen Sie Code als Reaktion darauf ausführen können, dass verschiedene Phasen des View-Transition-Prozesses erreicht werden. Weitere Informationen finden Sie unter [View Transitions mit JavaScript steuern](#view_transitions_mit_javascript_steuern).
2. In der aktuellen (alten) View erstellt die API statische Bild-**Snapshots** von Elementen, für die innerhalb des View-Transition-Bereichs ein von `none` verschiedener Wert für {{cssxref("view-transition-name")}} deklariert ist. Standardmäßig umfasst der Bereich bei dokumentbezogenen View Transitions das gesamte Dokument und bei elementbezogenen View Transitions das Element, für das `startViewTransition()` aufgerufen wird, sowie alle seine Nachkommen.
3. Die View-Änderung erfolgt:
   - Bei Übergängen innerhalb desselben Dokuments (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, wodurch sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Bei dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erstellt „Live“-Snapshots (also interaktive DOM-Bereiche) aus der neuen View.

   An diesem Punkt steht die View Transition kurz vor der Ausführung und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, sodass Sie beispielsweise durch Ausführen einer benutzerdefinierten JavaScript-Animation anstelle der Standardanimation reagieren können.

5. Die alten Snapshots werden herausanimiert, während die neuen Snapshots hineinanimiert werden. Standardmäßig werden die alten Snapshots von {{cssxref("opacity")}} 1 auf 0 und die neuen Snapshots von `opacity` 0 auf 1 animiert, wodurch ein Cross-Fade entsteht.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, werden die Snapshots zerstört und das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) wird erfüllt, sodass Sie reagieren können. Falls erforderlich, können Sie verhindern, dass eine View Transition ihren Endzustand erreicht, bis ein angegebenes {{jsxref("Promise")}} aufgelöst wurde, indem Sie die Methode [`ViewTransition.waitUntil()`](/de/docs/Web/API/ViewTransition/waitUntil) verwenden.

> [!NOTE]
> Wenn der [Seitensichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) `hidden` ist (etwa weil das Dokument durch ein Fenster verdeckt ist, der Browser minimiert wurde oder ein anderer Browser-Tab aktiv ist), wird die View Transition vollständig übersprungen.

### Ein Hinweis zu Snapshots

Es ist erwähnenswert, dass wir bei View Transitions üblicherweise den Begriff _Snapshot_ verwenden, um einen Teil des Bereichs zu bezeichnen, für den `view-transition-name` deklariert ist. Diese Bereiche werden getrennt von anderen Teilen des Bereichs animiert, für die unterschiedliche Werte für `view-transition-name` gesetzt sind. Während das Animieren eines Snapshots über eine View Transition tatsächlich zwei getrennte Snapshots umfasst — einen des alten und einen des neuen UI-Zustands — verwenden wir der Einfachheit halber den Begriff Snapshot für beide.

Der Snapshot des alten UI-Zustands ist ein statisches Bild, sodass der Benutzer nicht mit ihm interagieren kann, während er herausanimiert wird.

Der Snapshot des neuen UI-Zustands ist ein interaktiver DOM-Bereich, sodass der Benutzer bereits mit dem neuen Inhalt interagieren kann, während er hineinanimiert wird.

### Der Pseudo-Element-Baum der View Transition

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
root
  ├─ ::view-transition
  │  └─ ::view-transition-group(root)
  │     └─ ::view-transition-image-pair(root)
  │        ├─ ::view-transition-old(root)
  │        └─ ::view-transition-new(root)
  ├─ head
  └─ body
     └─ …
```

Bei Übergängen innerhalb desselben Dokuments (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Bei dokumentbezogenen View Transitions ist das Wurzelelement das `<html>`-Element. Bei elementbezogenen View Transitions ist das Wurzelelement das Element, für das `startViewTransition()` aufgerufen wurde.

Bei dokumentübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind folgende:

- {{cssxref("::view-transition")}} ist die Wurzel des View-Transitions-Overlays, das alle View-Transition-Gruppen enthält und über allen anderen Seiteninhalten liegt.
- Ein {{cssxref("::view-transition-group()")}} fungiert als Container für jeden View-Transition-Snapshot. Das Argument `root` gibt den Standard-Snapshot an — die View-Transition-Animation wird auf den Snapshot angewendet, dessen `view-transition-name` den Wert `root` hat. Standardmäßig ist dies ein Snapshot des Elements {{cssxref(":root")}}, da die Standard-Browserstile Folgendes definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie die obige Einstellung zurücksetzen und `view-transition-name: root` für ein anderes Element festlegen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Snapshot der alten View und {{cssxref("::view-transition-new()")}} auf den Live-Snapshot der neuen View. Beide werden als ersetzter Inhalt gerendert, ebenso wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}. Das bedeutet, dass sie mit Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestaltet werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten View-Transition-Animationen anzusprechen, indem für jedes ein anderer Wert für {{cssxref("view-transition-name")}} festgelegt wird. In solchen Fällen wird für jedes eine `::view-transition-group()` erstellt. Ein Beispiel finden Sie unter [Unterschiedliche Animationen für unterschiedliche Elemente](#unterschiedliche_animationen_für_unterschiedliche_elemente).

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie zum Anpassen der ausgehenden und eingehenden Animationen die Pseudo-Elemente {{cssxref("::view-transition-old()")}} beziehungsweise {{cssxref("::view-transition-new()")}} mit Ihren Animationen ansprechen.

## Erstellen einer grundlegenden View Transition

Dieser Abschnitt zeigt, wie Sie eine grundlegende View Transition sowohl für SPAs als auch für MPAs erstellen.

### Grundlegende SPA-View-Transition

Eine SPA kann Funktionen enthalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis zu aktualisieren, etwa wenn ein Navigationslink angeklickt oder ein Update vom Server übertragen wird.

Unsere [View-Transitions-SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) ist eine einfache Bildergalerie. Sie enthält eine Reihe von {{htmlelement("a")}}-Elementen mit Vorschaubild-{{htmlelement("img")}}-Elementen, die dynamisch mit JavaScript erzeugt werden. Außerdem enthält sie ein {{htmlelement("figure")}}-Element mit einem {{htmlelement("figcaption")}} und einem `<img>`, das die Bilder der Galerie in voller Größe anzeigt.

Wenn auf ein Vorschaubild geklickt wird, wird die Funktion `displayNewImage()` über [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgeführt, wodurch das Bild in voller Größe und die zugehörige Beschriftung innerhalb von `<figure>` angezeigt werden. Wir haben dies in einer Funktion `updateView()` gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

```js
function updateView(event) {
  // Handle the difference in whether the event is fired on the <a> or the <img>
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // With View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

Dieser Code reicht aus, um den Übergang zwischen den angezeigten Bildern zu behandeln. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanften Cross-Fade an, also als Standard-View-Transition. In Browsern ohne Unterstützung funktioniert dies weiterhin, jedoch ohne die ansprechende Animation.

### Grundlegende MPA-View-Transition

Beim Erstellen einer dokumentübergreifenden (MPA-)View-Transition ist der Prozess sogar noch einfacher als bei SPAs. JavaScript ist nicht erforderlich, da die View-Aktualisierung durch eine dokumentübergreifende Navigation mit demselben Origin ausgelöst wird und nicht durch eine von JavaScript initiierte DOM-Änderung. Um eine grundlegende MPA-View-Transition zu aktivieren, müssen Sie in das CSS sowohl des aktuellen als auch des Zieldokuments eine At-Regel {{cssxref("@view-transition")}} aufnehmen, um diese anzumelden:

```css
@view-transition {
  navigation: auto;
}
```

Unsere [View-Transitions-MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese At-Regel in Aktion und demonstriert außerdem, wie Sie die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) der View Transition anpassen können.

> [!NOTE]
> Derzeit können MPA-View-Transitions nur zwischen Dokumenten mit demselben Origin erstellt werden, diese Einschränkung könnte jedoch in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Für die Pseudo-Elemente der View Transitions werden standardmäßig [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) angewendet, die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind.

Wie oben erwähnt, erhalten die meisten Darstellungsübergänge standardmäßig eine sanfte Cross-Fade-Animation. Es gibt einige Ausnahmen:

- Auf `height`- und `width`-Übergänge wird eine sanfte Skalierungsanimation angewendet.
- Auf `position`- und `transform`-Übergänge wird eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen mit normalem CSS beliebig verändern — sprechen Sie die Animation „von“ mit {{cssxref("::view-transition-old()")}} und die Animation „zu“ mit {{cssxref("::view-transition-new()")}} an.

Um beispielsweise die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, in Fällen, in denen Sie diese Stile auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten, `::view-transition-group()` anzusprechen. Aufgrund der Pseudo-Element-Hierarchie und der Standardstile des User-Agent werden die Stile von beiden geerbt. Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Möglichkeit, Ihren Code abzusichern — `::view-transition-group()` wird ebenfalls animiert, und die Dauer der `group`-/`image-pair`-Pseudo-Elemente könnte sich von jener der `old`- und `new`-Pseudo-Elemente unterscheiden.

Bei dokumentübergreifenden (MPA-)Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit die View Transition funktioniert. Wenn Sie die View Transition in beide Richtungen verwenden möchten, müssen Sie sie in beiden Dokumenten einfügen.

Unsere [View-Transitions-MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht bei der Anpassung jedoch noch einen Schritt weiter: Sie definiert benutzerdefinierte Animationen und wendet diese auf die Pseudo-Elemente `::view-transition-old(root)` und `::view-transition-new(root)` an. Das Ergebnis ist, dass der standardmäßige Cross-Fade-Übergang bei einer Navigation durch einen „Nach-oben-Wischen“-Übergang ersetzt wird:

```css
/* Create a custom animation */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Apply the custom animation to the old and new page states */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## Unterschiedliche Animationen für unterschiedliche Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während der View-Aktualisierung ändern, mit derselben Animation überblendet. Wenn einige Elemente anders als mit der Standardanimation `root` animiert werden sollen, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} voneinander trennen. Beispielsweise erhalten die {{htmlelement("figcaption")}}-Elemente in unserer [View-Transitions-SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) den Wert `figure-caption` für `view-transition-name`, um sie in Bezug auf View Transitions vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Wenn dieses CSS angewendet wird, sieht der generierte Pseudo-Element-Baum nun wie folgt aus:

```plain
html
  ├─ ::view-transition
  |  ├─ ::view-transition-group(root)
  │  │  └─ ::view-transition-image-pair(root)
  │  │     ├─ ::view-transition-old(root)
  │  │     └─ ::view-transition-new(root)
  |  └─ ::view-transition-group(figure-caption)
  │     └─ ::view-transition-image-pair(figure-caption)
  │        ├─ ::view-transition-old(figure-caption)
  │        └─ ::view-transition-new(figure-caption)
  ├─ head
  └─ body
     └─ …
```

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht, getrennte View-Transition-Stile nur auf `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen View-Erfassungen werden unabhängig voneinander behandelt.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf `<figcaption>` an:

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die Pseudo-Elemente `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` angewendet. Außerdem haben wir beiden mehrere weitere Stile hinzugefügt, damit sie an derselben Stelle bleiben und die Standardstile unsere benutzerdefinierten Animationen nicht beeinträchtigen.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Snapshot-Pseudo-Elemente anzusprechen, unabhängig davon, welchen Namen sie haben. Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Gültige `view-transition-name`-Werte

Die Eigenschaft `view-transition-name` kann einen eindeutigen {{cssxref("custom-ident")}}-Wert annehmen. Dies kann ein beliebiger Identifikator sein, der nicht fälschlicherweise als Schlüsselwort interpretiert würde. Der Wert von `view-transition-name` muss für jedes gerenderte Element eindeutig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang übersprungen.

Sie kann außerdem folgende Schlüsselwortwerte annehmen:

- `none`: Bewirkt, dass das Element nicht an einem separaten Snapshot teilnimmt, außer es hat ein übergeordnetes Element, für das `view-transition-name` festgelegt ist. In diesem Fall wird es als Teil dieses Elements erfasst.
- `match-element`: Legt automatisch eindeutige `view-transition-name`-Werte für alle ausgewählten Elemente fest.

### Die Standardanimationsstile nutzen

Beachten Sie, dass wir auch eine weitere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als die obige lieferte. Unsere endgültige `<figcaption>`-View-Transition sah folgendermaßen aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen der alten und neuen View mit einer sanften Skalierung überblendet. Wir mussten lediglich für beide Zustände eine feste `height` festlegen, damit dies funktioniert.

> [!NOTE]
> [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere weitere Beispiele für Anpassungen.

## View Transitions mit JavaScript steuern

Eine View Transition besitzt eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Promise-Member enthält, mit denen Sie JavaScript als Reaktion auf unterschiedliche erreichte Zustände des Übergangs ausführen können. Beispielsweise wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt wurde und die Animation gleich beginnt, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Auf die `ViewTransition` kann folgendermaßen zugegriffen werden:

1. Über die Eigenschaft [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition)/[`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition). Dies bietet eine konsistente Möglichkeit, in jedem Kontext auf die aktive View Transition zuzugreifen, ohne sie zur späteren einfachen Verwendung speichern zu müssen.
2. Bei Übergängen innerhalb desselben Dokuments (SPAs) gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die mit dem Übergang verknüpfte `ViewTransition` zurück.
3. Bei dokumentübergreifenden Übergängen (MPAs):
   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) ermöglicht über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) Zugriff auf die `ViewTransition` sowie über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation) auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation), die den Navigationstyp sowie die aktuellen und Zielverlaufseinträge des Dokuments enthält.
     > [!NOTE]
     > Wenn die Navigation an einer Stelle in der Weiterleitungskette eine Cross-Origin-URL enthält, gibt die Eigenschaft `activation` `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments, entweder aus dem {{Glossary("bfcache", "Back/Forward Cache")}} (bfcache) oder aus dem {{Glossary("Prerender", "Prerendering")}}. Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) ermöglicht über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition) Zugriff auf die `ViewTransition`.

Sehen wir uns Beispielcode an, um zu zeigen, wie diese Funktionen verwendet werden können.

### Eine JavaScript-gestützte benutzerdefinierte Transition innerhalb desselben Dokuments (SPA)

Das folgende JavaScript kann verwendet werden, um eine kreisförmige Reveal-View-Transition zu erstellen, die von der Position des Mauszeigers des Benutzers beim Klicken ausgeht. Die Animation wird von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt.

```js
// Store the last click event
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    // Animate the root's new view
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert außerdem das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen View-Zustände auf irgendeine Weise ineinander übergehen. Der neue Zustand „wischt“ direkt über den alten Zustand, statt hineinzublenden:

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### Eine JavaScript-gestützte benutzerdefinierte dokumentübergreifende Transition (MPA)

Die Demo [List of Chrome DevRel team members](https://view-transitions.chrome.dev/profiles/mpa/) enthält eine grundlegende Sammlung von Teamprofilseiten und demonstriert, wie Sie die Ereignisse [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) verwenden, um die ausgehenden und eingehenden Animationen einer dokumentübergreifenden View Transition basierend auf den URLs „von“ und „zu“ anzupassen.

Der Event Listener für [`pageswap`](/de/docs/Web/API/Window/pageswap_event) sieht folgendermaßen aus. Er legt View-Transition-Namen für die Elemente auf der ausgehenden Seite fest, die auf die Profilseiten verlinken. Bei der Navigation von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen jeweils _nur_ für das angeklickte verlinkte Element bereitgestellt.

```js
window.addEventListener("pageswap", async (e) => {
  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Going from profile page to homepage
    // ~> The big img and title are the ones!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove view-transition-names after snapshots have been taken
      // Stops naming conflicts resulting from the page state persisting in BFCache
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> Wir entfernen die Werte für `view-transition-name`, nachdem in jedem Fall Snapshots erstellt wurden. Würden wir sie beibehalten, blieben sie beim Navigieren im im {{Glossary("bfcache", "bfcache")}} gespeicherten Seitenzustand erhalten. Wenn anschließend die Zurück-Schaltfläche gedrückt würde, würde der `pagereveal`-Event-Handler der Seite, zu der zurücknavigiert wird, versuchen, dieselben `view-transition-name`-Werte für andere Elemente festzulegen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird die View Transition übersprungen.

Der Event Listener für [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) sieht folgendermaßen aus. Er funktioniert ähnlich wie der Event Listener für `pageswap`, beachten Sie jedoch, dass wir hier die Animation „zu“ für Seitenelemente auf der neuen Seite anpassen.

```js
window.addEventListener("pagereveal", async (e) => {
  // If the "from" history entry does not exist, return
  if (!navigation.activation.from) return;

  // Only run this if an active view transition exists
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Went from profile page to homepage
    // ~> Set VT names on the relevant list item
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Set view-transition-name values on the elements to animate
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Went to profile page
    // ~> Set VT names on the main title and image
    if (isProfilePage(currentUrl)) {
      // Set view-transition-name values on the elements to animate
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Remove names after snapshots have been taken
      // so that we're ready for the next navigation
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Seitenzustand stabilisieren, um dokumentübergreifende Transitions konsistent zu machen

Bevor Sie eine dokumentübergreifende Transition ausführen, sollten Sie idealerweise warten, bis sich der Zustand der Seite stabilisiert hat. Verlassen Sie sich dabei auf {{Glossary("Render_blocking", "Render-Blocking")}}, um Folgendes sicherzustellen:

1. Kritische Stile sind geladen und angewendet.
2. Kritische Skripte sind geladen und ausgeführt.
3. Das für die anfängliche Seitenansicht des Benutzers sichtbare HTML wurde geparst, sodass es konsistent gerendert wird.

Stile blockieren das Rendering standardmäßig, außer sie werden dynamisch per Skript zum Dokument hinzugefügt. Sowohl Skripte als auch dynamisch hinzugefügte Stile können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) das Rendering blockieren.

Um sicherzustellen, dass Ihr anfängliches HTML geparst wurde und vor dem Ausführen der Übergangsanimation stets konsistent gerendert wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element nehmen Sie die folgenden Attribute auf:

- `rel="expect"` gibt an, dass Sie dieses `<link>`-Element verwenden möchten, um HTML auf der Seite beim Rendering zu blockieren.
- `href="#element-id"` gibt die ID des Elements an, das das Rendering blockieren soll.
- `blocking="render"` blockiert das Rendering des angegebenen HTML.

> [!NOTE]
> Damit das Rendering blockiert wird, müssen sich `script`-, `link`- und `style`-Elemente mit `blocking="render"` im `head` des Dokuments befinden.

Sehen wir uns anhand eines Beispiel-HTML-Dokuments an, wie dies aussieht:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async src="layout.js" blocking="render"></script>

    <!-- Use rel="expect" and blocking="render" to ensure the
         #lead-content element is visible and fully parsed before
         activating the transition -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">The first section</section>
      <section>The second section</section>
    </div>
  </body>
</html>
```

Das Ergebnis ist, dass das Rendern des Dokuments blockiert wird, bis das `<div>` mit dem Einleitungsinhalt geparst wurde, wodurch eine konsistente View Transition sichergestellt wird.

Sie können außerdem ein Attribut [`media`](/de/docs/Web/HTML/Reference/Elements/link#media) für `<link rel="expect">`-Elemente angeben. Beispielsweise möchten Sie beim Laden der Seite auf einem Gerät mit schmalem Bildschirm möglicherweise eine geringere Menge an Inhalt beim Rendering blockieren als auf einem Gerät mit breitem Bildschirm. Das ist sinnvoll — auf einem Mobilgerät ist beim ersten Laden der Seite weniger Inhalt sichtbar als auf einem Desktop-Gerät.

Dies kann mit dem folgenden HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (width > 640px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (width <= 640px)" />
```
