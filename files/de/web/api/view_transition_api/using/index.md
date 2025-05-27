---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie View-Übergänge erstellt und die Übergangsanimationen angepasst werden, sowie wie aktive View-Übergänge manipuliert werden können. Dies umfasst View-Übergänge sowohl für DOM-Statusaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der View-Übergangsprozess

Lassen Sie uns den Prozess durchgehen, wie ein View-Übergang funktioniert:

1. Ein View-Übergang wird ausgelöst. Wie dies geschieht, hängt von der Art des View-Übergangs ab:
   - Im Fall von gleichen Dokument-Übergängen (SPAs) wird ein View-Übergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung des View-Wechsels auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Im Fall von übergreifenden Dokument-Übergängen (MPAs) wird ein View-Übergang durch die Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen im selben Ursprung sein und sich durch das Einfügen eines {{cssxref("@view-transition")}} At-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` für den View-Übergang optieren.
     > [!NOTE]
     > Ein aktiver View-Übergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (zum Beispiel zurückgegeben von `startViewTransition()` im Fall von gleichen Dokument-Übergängen (SPA)). Das `ViewTransition`-Objekt enthält mehrere Zusagen, die es Ihnen ermöglichen, Code als Antwort auf das Erreichen verschiedener Teile des View-Übergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von View-Übergängen mit JavaScript](#steuerung_von_view-übergängen_mit_javascript).
2. Auf dem aktuellen (alten Seiten-)View erfasst die API Schnappschüsse von Elementen, die ein {{cssxref("view-transition-name")}} deklariert haben.
3. Der View-Wechsel tritt ein:

   - Im Fall von gleichen Dokument-Übergängen (SPAs) wird der Callback, der an `startViewTransition()` übergeben wurde, aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, erfüllt sich die Zusage [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone), sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Im Fall von übergreifenden Dokument-Übergängen (MPAs) erfolgt die Navigation zwischen dem aktuellen und dem Zieldokument.

4. Die API erfasst Schnappschüsse aus der neuen Ansicht als Live-Repräsentation.

   An diesem Punkt ist der View-Übergang kurz vor der Ausführung, und die Zusage [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, sodass Sie als Reaktion eine benutzerdefinierte JavaScript-Animation anstelle der Standardanimation ausführen können.

5. Die Schnappschüsse der alten Seite animieren "aus", während die neuen View-Schnappschüsse "ein" animieren. Standardmäßig animieren die alten View-Schnappschüsse von {{cssxref("opacity")}} 1 zu 0, und die neuen View-Schnappschüsse animieren von `opacity` 0 zu 1, was einen Kreuzblende-Effekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird die Zusage [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, sodass Sie darauf reagieren können.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitsstatus](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel wenn das Dokument durch ein Fenster verdeckt ist, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der View-Übergang vollständig übersprungen.

### Der View-Übergang-Pseudo-Element-Baum

Um die Erstellung der ausgehenden und eingehenden Übergangsanimationen zu handhaben, erstellt die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group()")}} Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Fall von gleichen Dokument-Übergängen (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Fall von übergreifenden Dokument-Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des View-Übergangs-Overlays, das alle View-Übergang-Schnappschussgruppen enthält und über dem gesamten anderen Seiteninhalt liegt.
- Ein {{cssxref("::view-transition-group()")}} agiert als Container für jede View-Übergang-Schnappschussgruppe. Das `root`-Argument gibt die Standard-Schnappschussgruppe an — die View-Übergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, weil die Standard-Browserstile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das Obige aufheben und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old()")}} zielt auf den statischen Schnappschuss des alten Seitenelements, und {{cssxref("::view-transition-new()")}} zielt auf den Live-Schnappschuss des neuen Seitenelements. Beide werden als ersetzter Inhalt gerendert, in ähnlicher Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit nützlichen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten View-Übergangsanimationen zu zielen, indem man auf jedem Element einen anderen {{cssxref("view-transition-name")}} setzt. In solchen Fällen wird ein `::view-transition-group()` für jedes erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}} Pseudo-Elemente mit Ihren Animationen anvisieren.

## Erstellung eines einfachen View-Übergangs

Dieser Abschnitt zeigt, wie man einen einfachen View-Übergang erstellt, sowohl im SPA- als auch im MPA-Fall.

### Einfacher SPA-View-Übergang

Zum Beispiel kann eine SPA Funktionalität beinhalten, um neuen Inhalt abzurufen und das DOM als Antwort auf ein Ereignis zu aktualisieren, wie etwa, wenn auf einen Navigationslink geklickt wird oder ein Update vom Server gesendet wird. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies zu einer `displayNewImage()`-Funktion vereinfacht, die ein neues großformatiges Bild basierend auf dem angeklickten Thumbnail anzeigt. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur aufruft, wenn der Browser sie unterstützt:

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

Dieser Code ist ausreichend, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Beschriftungen als sanfte Kreuzblende (den Standard-View-Übergang). Es wird immer noch in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Einfacher MPA-View-Übergang

Bei der Erstellung eines übergreifenden Dokument-(MPA)-View-Übergangs ist der Prozess noch einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da das View-Update durch eine übergreifende Dokument-, gleichursprüngliche Navigation ausgelöst wird, anstatt durch eine JavaScript-initiierte DOM-Änderung. Um einen einfachen MPA-View-Übergang zu ermöglichen, müssen Sie eine {{cssxref("@view-transition")}} At-Regel im CSS für sowohl das aktuelle als auch das Zieldokument spezifizieren, um sie einzubeziehen, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt dieses At-Regel in Aktion und demonstriert zusätzlich, wie [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des View-Übergangs angepasst werden können.

> [!NOTE]
> Derzeit können MPA-View-Übergänge nur zwischen gleichursprünglichen Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die View-Übergangs-Pseudo-Elemente haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge haben eine standardmäßige sanfte Kreuzblende-Animation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine glatte Skalierungsanimation angewendet.
- `position`- und `transform`-Übergänge haben eine glatte Bewegungsanimation angewendet.

Sie können die Standardanimationen in beliebiger Weise ändern, indem Sie reguläres CSS verwenden — zielen Sie die "von"-Animation mit {{cssxref("::view-transition-old()")}}, und die "zu"-Animation mit {{cssxref("::view-transition-new()")}} an.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie den `::view-transition-group()` mit solchen Stilen anvisieren, wenn Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der standardmäßigen Benutzeragent-Stilgebung werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — `::view-transition-group()` animiert ebenfalls und Sie könnten unterschiedliche Dauern für die `group`/`image-pair`-Pseudo-Elemente gegenüber den `old` und `new`-Pseudo-Elementen erhalten.

Im Fall von übergreifenden Dokument-(MPA)-Übergängen müssen die Pseudo-Elemente nur im Zieldokument für den View-Übergang enthalten sein. Wenn Sie den View-Übergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden Dokumenten einschließen.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben genannte CSS, geht jedoch noch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass der standardmäßige Kreuzblende-Übergang gegen einen "Swipe Up"-Übergang getauscht wird, wenn die Navigation erfolgt:

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

Standardmäßig werden alle verschiedenen Elemente, die sich während des View-Updates ändern, mit der gleichen Animation überführt. Wenn Sie möchten, dass einige Elemente anders animieren als die Standard-`root`-Animation, können Sie sie mit der Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel sind in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente mit einem `view-transition-name` von `figure-caption` versehen, um sie von dem Rest der Seite in Bezug auf View-Übergänge zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, wird der generierte Pseudo-Element-Baum jetzt so aussehen:

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

Das Vorhandensein des zweiten Sets von Pseudo-Elementen ermöglicht es, separate View-Übergang-Stile nur auf die `<figcaption>` anzuwenden. Die verschiedenen alten und neuen View-Aufnahmen werden separat voneinander gehandhabt.

> [!NOTE]
> Der Wert von `view-transition-name` ist ein eindeutiges {{cssxref("custom-ident")}}; es kann jeder Bezeichner sein, der nicht als Schlüsselwort fehlinterpretiert würden. Das Schlüsselwort `none` ist kein gültiger Name, da dieser Wert bedeutet, dass das Element an keinen View-Übergängen teilnimmt. Vermeiden Sie auch `auto`, da es diskutiert wird, `view-transition-name` automatisch zu bestimmen](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name).
>
> `view-transition-name` Werte müssen ebenfalls eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) zurückgewiesen und der Übergang übersprungen.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf die `<figcaption>` an:

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben außerdem eine Reihe anderer Stile hinzugefügt, um sie an derselben Stelle zu halten und die Standardeinstellung davon abzuhalten, unsere benutzerdefinierten Animationen zu stören.

> [!NOTE]
> Sie können `*` als den Bezeichner in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente anzuvisieren, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzen Sie die Standardeinstellung für Animationen

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis liefert als das Obige. Unser endgültiger `<figcaption>`-View-Übergang sah folgendermaßen aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group()` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer glatten Skalierung überträgt. Wir mussten lediglich eine feste `height` auf beiden Zuständen festlegen, um es zu ermöglichen.

> **Anmerkung:** [Weiche Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere weitere Anpassungsbeispiele.

## Steuerung von View-Übergängen mit JavaScript

Ein View-Übergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Zusage-Mitglieder enthält, die es Ihnen erlauben, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel erfüllt sich [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready), sobald der Pseudo-Element-Baum erstellt ist und die Animation kurz davor steht zu beginnen, während sich [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann wie folgt aufgerufen werden:

1. Im Fall von gleichen Dokument-(SPA)-Übergängen gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den `ViewTransition` zurück, der dem Übergang zugeordnet ist.
2. Im Fall von übergreifenden Dokument-(MPA)-Übergängen:

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Eigenschaft sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen sowie die Ziel-Dokumenthistorieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitkette hat, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} (bfcache) oder {{Glossary("Prerender", "Prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf die `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Eigenschaft.

Sehen wir uns etwas Beispielcode an, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter gleicher Dokument-(SPA)-Übergang

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Offenbarungs-View-Übergang zu erstellen, der vom Standort des Benutzer-Cursors beim Klicken ausgeht und die Animation durch die [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die standardmäßige CSS-Animation auszuschalten und die alten und neuen View-Zustände daran zu hindern, sich in irgendeiner Weise zu mischen (der neue Zustand "wischt" direkt über den alten Zustand, anstatt in ihn überzugehen):

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

### Ein JavaScript-gesteuerter benutzerdefinierter übergreifender Dokument-(MPA)-Übergang

Das [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamseitenprofilen und demonstriert, wie die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse verwendet werden, um die ausgehenden und eingehenden Animationen eines übergreifenden View-Übergangs basierend auf den "von"- und "zu"-URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht wie folgt aus. Dieser setzt View-Übergang-Namen auf die Elemente auf der ausgehenden Seite, die auf die Profilseiten verlinken. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das verknüpfte Element bereitgestellt, das in jedem Fall angeklickt wird.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem die Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenzustand eingefroren, der im {{Glossary("bfcache", "bfcache")}} beim Navigieren gespeichert wird. Wenn dann die Zurückschaltfläche gedrückt wurde, würde der `pagereveal`-Ereignishandler der Seite, zu der zurücknavigiert wird, versuchen, die gleichen `view-transition-name`-Werte auf verschiedenen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der View-Übergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener sieht wie folgt aus. Dieser funktioniert auf ähnliche Weise wie der `pageswap` Ereignis-Listener, beachte jedoch, dass hier die "zu"-Animation für Seitenelemente auf der neuen Seite angepasst wird.

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

## Stabilisierung des Seitenzustands, um übergreifende Dokument-Übergänge konsistent zu machen

Bevor Sie einen übergreifenden Dokument-Übergang durchführen, möchten Sie idealerweise warten, bis der Seitenzustand stabilisiert ist, wobei Sie sich auf {{Glossary("Render_blocking", "Rendering-Blockierung")}} verlassen, um sicherzustellen, dass:

1. Kritische Styles geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML, das für den initialen Blick des Benutzers auf die Seite sichtbar ist, analysiert wurde, sodass es durchgängig gerendert wird.

Styles sind standardmäßig renderblockiert, und Skripte können mithilfe des [Attributes `blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) renderblockiert werden.

Um sicherzustellen, dass Ihr initiales HTML analysiert wurde und immer konsistent gerendert wird, bevor die Übergangsanimation abläuft, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element schließen Sie die folgenden Attribute ein:

- `rel="expect"`, um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML-Inhalte auf der Seite zu renderblockieren.
- `href="#element-id"`, um die ID des Elements anzugeben, das Sie renderblockieren möchten.
- `blocking="render"`, um das spezifizierte HTML zu renderblockieren.

Lassen Sie uns sehen, wie das mit einem Beispiel-HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis der führende Content-`<div>` analysiert wurde, wodurch ein konsistenter View-Übergang sichergestellt wird.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut auf `<link rel="expect">`-Elementen angeben. Zum Beispiel, möglicherweise möchten Sie das Rendering blockieren, wenn Sie eine kleinere Menge an Inhalten laden, wenn die Seite auf einem schmalbildschirmigen Gerät geladen wird, im Vergleich zu einem breitbildschirmigen Gerät. Das macht Sinn — auf einem Mobilgerät wird weniger Inhalt beim ersten Laden der Seite sichtbar sein als im Fall eines Desktops.

Dies könnte mit dem folgenden HTML erreicht werden:

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
