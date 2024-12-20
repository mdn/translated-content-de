---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man View-Übergänge erstellt und die Übergangsanimationen anpasst sowie wie man aktive View-Übergänge manipuliert. Dies umfasst View-Übergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Übergangsprozess

Lassen Sie uns den Prozess durchgehen, wie ein View-Übergang funktioniert:

1. Ein View-Übergang wird ausgelöst. Wie dies geschieht, hängt von der Art des View-Übergangs ab:
   - Im Fall von Single-Document-Übergängen (SPAs) wird ein View-Übergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung für den View-Wechsel auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von Cross-Document-Übergängen (MPAs) wird ein View-Übergang ausgelöst, indem die Navigation zu einem neuen Dokument initiiert wird. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich auf demselben Ursprung befinden und sich durch Einschließen einer {{cssxref("@view-transition")}}-Regel in ihrem CSS mit einem `navigation` Deskriptor von `auto` für den View-Übergang opt-in entscheiden.
     > [!NOTE]
     > Ein aktiver View-Übergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (zum Beispiel von `startViewTransition()` im Fall von Single-Document- (SPA-) Übergängen zurückgegeben). Das `ViewTransition`-Objekt umfasst mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf das Erreichen verschiedener Teile des View-Übergangsprozesses auszuführen. Siehe [Steuern von View-Übergängen mit JavaScript](#steuern_von_view-übergängen_mit_javascript) für weitere Informationen.
2. Im aktuellen (alten Seiten-) View nimmt die API Snapshots von Elementen auf, die ein {{cssxref("view-transition-name")}} aufweisen.
3. Der View-Wechsel erfolgt:

   - Im Fall von Single-Document-Übergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, was zu einer Änderung des DOM führt.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was es Ihnen ermöglicht, auf die Aktualisierung des DOM zu reagieren.

   - Im Fall von Cross-Document-Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API nimmt Snapshots von der neuen Ansicht als Live-Darstellung auf.

   An diesem Punkt steht der View-Übergang kurz vor dem Start, und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt sich, was es Ihnen erlaubt, durchführt zu laufen, um zum Beispiel eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation auszuführen.

5. Die Snapshots der alten Seite werden „ausgeblendet“, während die Snapshots der neuen Ansicht „eingeblendet“ werden. Standardmäßig animieren die Snapshots der alten Ansicht von {{cssxref("opacity")}} 1 zu 0, und die Snapshots der neuen Ansicht animieren von `opacity` 0 zu 1, was eine Überblendung erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, erfüllt sich das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished), was Ihnen erlaubt, darauf zu reagieren.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument von einem Fenster verdeckt ist, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der View-Übergang vollständig übersprungen.

### Der View-Übergang-Pseudoelement-Baum

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, erstellt die API einen Pseudoelement-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}}-Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Fall von Single-Document-Übergängen (SPAs) wird der Pseudoelement-Baum im Dokument verfügbar gemacht. Im Fall von Cross-Document-Übergängen (MPAs) wird der Pseudoelement-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des View-Übergangs-Overlays, das alle View-Übergangs-Snapshot-Gruppen enthält und oberhalb aller anderen Seiteninhalte sitzt.
- Eine {{cssxref("::view-transition-group")}} fungiert als Container für jede View-Übergangs-Snapshot-Gruppe. Das `root`-Argument gibt die Standard-Snapshot-Gruppe an — die View-Übergangs-Animation wird auf den Snapshot angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, weil die Standardbrowserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige aufheben und `view-transition-name: root` auf ein anderes Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Snapshot des alten Seitenelements ab, und {{cssxref("::view-transition-new")}} zielt auf den Live-Snapshot des neuen Seitenelements ab. Beide werden als ersetzter Inhalt dargestellt, in derselben Art wie ein {{htmlelement("img")}} oder ein {{htmlelement("video")}}, was bedeutet, dass sie mit nützlichen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten View-Übergangsanimationen zu zielen, indem ein anderer {{cssxref("view-transition-name")}} auf jedes eingestellt wird. In solchen Fällen wird für jedes eine `::view-transition-group` erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie die {{cssxref("::view-transition-old")}}- und {{cssxref("::view-transition-new")}}-Pseudoelemente mit Ihren Animationen anvisieren, um die ausgehenden und eingehenden Animationen anzupassen.

## Erstellen eines einfachen View-Übergangs

Dieser Abschnitt veranschaulicht, wie Sie einen einfachen View-Übergang sowohl im SPA- als auch im MPA-Fall erstellen können.

### Einfacher SPA-View-Übergang

Als Beispiel kann eine SPA eine Funktionalität zum Abrufen neuer Inhalte und zum Aktualisieren des DOM in Reaktion auf ein Ereignis beinhalten, wie z.B. das Klicken auf einen Navigationslink oder das Pushen eines Updates vom Server. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine Funktion `displayNewImage()` vereinfacht, die ein neues Vollbild basierend auf dem angeklickten Thumbnail anzeigt. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code ist ausreichend, um den Übergang zwischen den angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Bildunterschriften als sanfte Überblendung (den Standard-View-Übergang). Es wird weiterhin in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Einfacher MPA-View-Übergang

Beim Erstellen eines Cross-Document- (MPA-) View-Übergangs ist der Prozess sogar noch einfacher als bei SPAs. Kein JavaScript ist erforderlich, da das View-Update durch eine Cross-Document-, gleich-origin-Navigation ausgelöst wird, anstelle einer durch JavaScript initiierten DOM-Änderung. Um einen einfachen MPA-View-Übergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}}-Regel im CSS für sowohl das aktuelle als auch das Zieldokument angeben, um sie zu opt-in anzumelden:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in der Praxis und demonstriert zusätzlich, wie Sie [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des View-Übergangs anpassen können.

> [!NOTE]
> Derzeit können MPA-View-Übergänge nur zwischen gleichgearteten Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudo-Elemente haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert beschrieben sind).

Die meisten Erscheinungsübergänge erhalten eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Skalierungsanimation angewendet.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen nach Belieben mit regulärem CSS ändern – zielen Sie die „von“-Animation mit {{cssxref("::view-transition-old")}} und die „zu“-Animation mit {{cssxref("::view-transition-new")}}.

Um beispielsweise die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen anvisieren, wenn Sie möchten, dass sie auf `::view-transition-old()` und `::view-transition-new()` angewendet werden. Aufgrund der Pseudoelement-Hierarchie und der Standardbenutzeragenten-Stylings werden die Styles von beiden übernommen. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — auch `::view-transition-group()` wird animiert, und Sie könnten am Ende unterschiedlich lange Dauern für die `group`/`image-pair`-Pseudoelemente im Vergleich zu den `old`- und `new`-Pseudoelementen haben.

Im Fall von Cross-Document- (MPA-) Ütransitionen müssen die Pseudoelemente nur im Zieldokument enthalten sein, damit der View-Übergang funktioniert. Wenn Sie den View-Übergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden Dokumenten enthalten.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obenstehende CSS, geht jedoch einen Schritt weiter bei der Anpassung, definieren benutzerdefinierte Animationen und wenden diese auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudoelemente an. Das Ergebnis ist, dass der Standard-Überblendungsübergang durch einen „Hochwischen“-Übergang ersetzt wird, wenn die Navigation auftritt:

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

## Verschiedene Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die sich während des View-Updates ändern, mit derselben Animation überführt. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animieren, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel erhalten in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente einen `view-transition-name` von `figure-caption`, um sie in Bezug auf die View-Übergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudoelement-Baum jetzt so aus:

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

Das Vorhandensein des zweiten Satzes von Pseudoelementen erlaubt, dass spezielles View-Übergangsstyling nur auf das `<figcaption>` angewendet wird. Die verschiedenen alten und neuen Ansichtsaufnahmen werden voneinander getrennt gehandhabt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet speziell, dass das Element nicht an einem View-Übergang teilnimmt.
>
> `view-transition-name`-Werte müssen auch eindeutig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Der folgende Code wendet eine Benutzerdefinierte Animation nur auf das `<figcaption>` an:

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudoelemente angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an derselben Stelle zu halten und zu verhindern, dass das Standardstyling unsere benutzerdefinierten Animationen stört.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudoelement verwenden, um alle Snapshot-Pseudoelemente unabhängig davon, welchen Namen sie haben, zu zielen. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine einfachere Übergangsoption entdeckt haben, die ein schöneres Ergebnis produzierte als das oben. Unser finaler `<figcaption>`-View-Übergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, da standardmäßig `::view-transition-group` die `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung überträgt. Wir mussten nur eine feste `height` auf beiden Zuständen setzen, damit es funktioniert.

> **Hinweis:** [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuern von View-Übergängen mit JavaScript

Ein View-Übergang hat eine zugeordnete [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs, die erreicht werden, auszuführen. Zum Beispiel erfüllt sich [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready), sobald der Pseudoelement-Baum erstellt wird und die Animation kurz vor dem Start steht, während sich [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, sobald die Animation beendet ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann wie folgt zugegriffen werden:

1. Im Fall von Single-Document- (SPA-) Übergängen gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) die `ViewTransition`, die mit dem Übergang verbunden ist, zurück.
2. Im Fall von Cross-Document- (MPA-) Übergängen:

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition) sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Zieldokument-Historieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine cross-origin URL irgendwo in der Umleitungs-Kette hat, gibt die Eigenschaft `activation` `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines neuen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Schauen wir uns etwas Beispielcode an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein durch JavaScript gesteuerter benutzerdefinierter Single-Document- (SPA-) Übergang

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Enthüllungs-View-Übergang zu erstellen, der vom Cursor des Benutzers bei einem Klick ausgeht, mit Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation zu deaktivieren und die alten und neuen View-Zustände auf keine Weise zu vermischen (der neue Zustand „wischt“ direkt über den alten Zustand anstelle von ein Übergang hinein):

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

### Ein durch JavaScript gesteuerter benutzerdefinierter Cross-Document- (MPA-) Übergang

Das [Verzeichnis der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) zeigt ein grundlegendes Set mit Teamprofilseiten und demonstriert, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)- und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines Cross-Document View-Übergangs basierend auf den "von" und "zu" URLs zu spezifizieren.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis-Listener sieht wie folgt aus. Dies setzt View-Übergangsnamen auf den Elementen auf der abgehenden Seite, die auf die Profilseiten verlinken. Wenn man von der Startseite zu einer Profilseite navigiert, werden benutzerdefinierte Animationen _nur_ für das verlinkte Element bereitgestellt, das in jedem Fall angeklickt wird.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem Snapshots in jedem Fall erstellt wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenstatus gespeichert bleiben, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert wird. Wenn anschließend die Zurück-Taste gedrückt würde, würde der `pagereveal`-Ereignishandler der Seite, zu der zurück navigiert wird, dann versuchen, dieselben `view-transition-name`-Werte auf verschiedenen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` haben, wird der View-Übergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis-Listener sieht wie folgt aus. Dies funktioniert ähnlich wie der `pageswap`-Ereignis-Listener, wobei hier jedoch beachtet werden sollte, dass wir die "zu"-Animation für Seitenelemente auf der neuen Seite anpassen.

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

## Seitenstatus stabilisieren, um konsistente Cross-Document-Übergänge sicherzustellen

Bevor Sie einen Cross-Document-Übergang ausführen, möchten Sie idealerweise warten, bis sich der Zustand der Seite stabilisiert hat, indem Sie auf {{Glossary("Render_blocking", "Render-Blockierung")}} setzen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Das HTML, das für die initiale Ansicht des Nutzers sichtbar ist, analysiert wurde, sodass es konsistent gerendert wird.

Stile werden standardmäßig render-blockiert, und Skripte können mithilfe des Attributs [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) render-blockiert werden.

Um sicherzustellen, dass Ihr initiales HTML analysiert und immer konsistent gerendert wird, bevor die Übergangsanimation abläuft, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element schließen Sie die folgenden Attribute ein:

- `rel="expect"`, um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML auf der Seite zu render-blockieren.
- `href="#element-id"`, um die ID des Elements anzugeben, das Sie render-blockieren möchten.
- `blocking="render"`, um das angegebene HTML zu render-blockieren.

Sehen wir uns an, wie das mit einem Beispiel-HTML-Dokument aussieht:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- This will be render-blocking by default -->
    <link rel="stylesheet" href="style.css" />

    <!-- Marking critical scripts as render blocking will
         ensure they're run before the view transition is activated -->
    <script async href="layout.js" blocking="render"></script>

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

Das Ergebnis ist, dass das Dokumentrendern blockiert wird, bis der enthaltende `<div>` analysiert wurde, sodass ein konsistenter View-Übergang gewährleistet ist.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media)-Attribut auf `<link rel="expect">`-Elementen spezifizieren. Sie möchten beispielsweise unter Umständen das Rendern auf eine kleinere Menge an Inhalten blockieren, wenn Sie die Seite auf einem Gerät mit einem kleinen Bildschirm laden, als es bei einem Desktop der Fall ist. Dies ergibt Sinn – auf einem mobilen Gerät wird beim ersten Laden der Seite weniger Inhalt sichtbar als im Fall eines Desktops.

Dies könnte mit folgendem HTML erreicht werden:

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
