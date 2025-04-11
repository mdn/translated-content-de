---
title: Verwenden der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst sowie wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für das Navigieren zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, durch den ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt von der Art des Ansichtsübergangs ab:

   - Im Fall von Übergängen im selben Dokument (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die Ansichtsänderung auslösen würde, als Rückruf an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) übergeben wird.
   - Bei Dokumenten übergreifenden Übergängen (MPAs) wird ein Ansichtsübergang durch die Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Zieldokument der Navigation müssen sich im selben Ursprung befinden und in den Ansichtsübergang einwilligen, indem sie eine {{cssxref("@view-transition")}}-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` enthalten.

     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz (zum Beispiel zurückgegeben von `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergang-Prozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).

2. Auf der aktuellen (alten Seite) Ansicht erfasst die API Schnappschüsse von Elementen, auf denen ein {{cssxref("view-transition-name")}} deklariert ist.

3. Die Ansichtsänderung erfolgt:

   - Im Fall von Übergängen im selben Dokument (SPAs) wird der Rückruf, der an `startViewTransition()` übergeben wurde, ausgelöst, was dazu führt, dass sich das DOM ändert.

     Wenn der Rückruf erfolgreich ausgeführt wurde, erfüllt sich das [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone)-Versprechen, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Bei Dokumenten übergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und den Ziel-Dokumenten.

4. Die API erfasst Schnappschüsse aus der neuen Ansicht als Live-Darstellung.

   Zu diesem Zeitpunkt steht der Ansichtsübergang kurz vor der Ausführung, und das Versprechen [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, sodass Sie beispielsweise durch das Ausführen einer benutzerdefinierten JavaScript-Animation reagieren können, anstatt der Standardanimation.

5. Die alten Seiten-Schnappschüsse animieren „out“, während die neuen Ansichts-Schnappschüsse „in“ animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 zu 0, und die neuen Ansichts-Schnappschüsse animieren von `opacity` 0 zu 1, was einen Kreuzblenden-Effekt erzeugt.

6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, erfüllt sich das [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished)-Versprechen, sodass Sie reagieren können.

> [!NOTE]
> Wenn der [Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browsertab aktiv ist) während eines Aufrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Der Pseudo-Element-Baum des Ansichtsübergangs

Um die Erstellung der ausgehenden und eingehenden Übergangsanimationen zu handhaben, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}}-Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Fall von Übergängen im selben Dokument (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Fall von dokumentübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergangs-Schnappschussgruppen enthält und über dem gesamten anderen Seiteninhalt liegt.
- Ein {{cssxref("::view-transition-group")}} fungiert als Container für jede Ansichtsübergang-Schnappschussgruppe. Das Argument `root` spezifiziert die Standardschnappschussgruppe — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, da die Standard-Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Seien Sie sich jedoch bewusst, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements, und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements. Beide werden als ersetzter Inhalt gerendert, ähnlich wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit praktischen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen zu zielen, indem Sie jedem ein anderes {{cssxref("view-transition-name")}} zuweisen. In solchen Fällen wird für jedes ein `::view-transition-group` erstellt. Siehe [Unterschiedliche Animationen für verschiedene Elemente](#unterschiedliche_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie, um die ausgehenden und eingehenden Animationen anzupassen, die Pseudo-Elemente {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} mit Ihren Animationen ansprechen.

## Erstellen eines einfachen Ansichtsübergangs

Dieser Abschnitt zeigt, wie man einen einfachen Ansichtsübergang sowohl im SPA- als auch im MPA-Fall erstellt.

### Einfacher SPA-Ansichtsübergang

Ein SPA könnte zum Beispiel Funktionalitäten umfassen, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis zu aktualisieren, wie z.B. einem Klick auf einen Navigationslink oder einem Update vom Server. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies vereinfacht auf eine `displayNewImage()`-Funktion, die ein neues Bild in voller Größe zeigt, basierend auf dem geklickten Thumbnail. Wir haben dies in eine `updateView()`-Funktion gekapselt, die die View Transition API nur dann aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Untertiteln als sanfte Überblendung (der Standardansichtsübergang). In nicht unterstützenden Browsern funktioniert es weiterhin, jedoch ohne die schöne Animation.

### Einfacher MPA-Ansichtsübergang

Wenn Sie einen Dokumenten übergreifenden (MPA) Ansichtsübergang erstellen, ist der Prozess sogar einfacher als bei SPAs. Es ist kein JavaScript erforderlich, da die Ansichtaktualisierung durch eine dokumentübergreifende, gleich-originäre Navigation ausgelöst wird, anstatt durch eine JavaScript-induzierte DOM-Änderung. Um einen grundlegenden MPA-Ansichtsübergang zu ermöglichen, müssen Sie eine {{cssxref("@view-transition")}}-Regel im CSS sowohl für das aktuelle als auch das Zieldokument angeben, um sie zu aktivieren, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie man [die ausgehenden und eingehenden Animationen anpassen kann](#anpassen_ihrer_animationen) des Ansichtsübergangs.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen gleich-originären Dokumenten erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Die Ansichtsübergangs-Pseudo-Elemente haben standardmäßige [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewandt (die auf ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert sind).

Die meisten Anzeigeübergänge erhalten eine standardmäßige sanfte Überblendungsanimation, wie oben erwähnt. Es gibt einige Ausnahmen:

- Übergänge von `height` und `width` haben eine sanfte Skalierungsanimation angewendet.
- Übergänge von `position` und `transform` haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen in jeder gewünschten Weise mit gewöhnlichem CSS ändern — zielen Sie die "from"-Animation mit {{cssxref("::view-transition-old")}} und die "to"-Animation mit {{cssxref("::view-transition-new")}} an.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen ansprechen, in Fällen, in denen Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und des Standard-Benutzeragenten-Stylings werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende mit unterschiedlichen Dauern für die `group`/`image-pair` Pseudo-Elemente im Vergleich zu den `old` und `new` Pseudo-Elementen enden.

Im Fall von dokumentübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beiden dokumentieren.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben angezeigte CSS, macht jedoch einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und sie auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass die Standard-Überblendungsübergänge durch einen "Wischen nach oben"-Übergang ausgetauscht werden, wenn die Navigation stattfindet:

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

## Unterschiedliche Animationen für verschiedene Elemente

Standardmäßig werden alle verschiedenen Elemente, die während der Ansichtsaktualisierung geändert werden, mit derselben Animation übertragen. Wenn Sie möchten, dass einige Elemente anders als die Standardanimation `root` animiert werden, können Sie sie durch die Eigenschaft {{cssxref("view-transition-name")}} trennen. Zum Beispiel haben in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente einen `view-transition-name` von `figure-caption`, um sie vom Rest der Seite in Bezug auf Ansichtsübergänge zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem angewendeten CSS sieht der generierte Pseudo-Element-Baum nun so aus:

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

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht, dass separat Ansichtsübergangstyling nur auf das `<figcaption>` angewendet wird. Die verschiedenen alten und neuen Erfassungen der Ansicht werden separat behandelt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie möchten, außer `none` — der Wert `none` bedeutet speziell, dass das Element nicht an einem Ansichtsübergang teilnehmen wird.
>
> `view-transition-name`-Werte müssen ebenfalls einzigartig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

Der folgende Code wendet eine benutzerdefinierte Animation nur auf das `<figcaption>` an:

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe anderer Stile zu beiden hinzugefügt, um sie an der gleichen Stelle zu halten und das Standardstyling daran zu hindern, unsere benutzerdefinierten Animationen zu stören.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente zu zielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzen Sie die Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher und ein schöneres Ergebnis als die obige erzeugt hat. Unsere endgültige `<figcaption>`-Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil standardmäßig `::view-transition-group` `Breite` und `Höhe` zwischen den alten und neuen Ansichten mit einer sanften Skalierung überträgt. Wir mussten nur eine feste `Höhe` auf beiden Zuständen setzen, um es zum Laufen zu bringen.

> **Hinweis:** [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere andere Anpassungsbeispiele.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen, die erreicht werden. Zum Beispiel erfüllt sich [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready), sobald der Pseudo-Element-Baum erstellt ist und die Animation kurz davor steht, zu starten, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) sich erfüllt, sobald die Animation beendet ist, und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Das `ViewTransition`-Objekt kann wie folgt erreicht werden:

1. Im Fall von gleich-dokumentierten (SPA) Übergängen gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) das mit dem Übergang assoziierte `ViewTransition` zurück.
2. Im Fall von dokumentübergreifenden (MPA) Übergängen:

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) bietet Zugriff auf das `ViewTransition` über die [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition)-Eigenschaft sowie eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Ziel-Dokumentverlaufseinträge enthält.

     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Umleitungsreihe hat, gibt die `activation`-Eigenschaft `null` zurück.

   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis wird ausgelöst, wenn ein Dokument zum ersten Mal gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder bei der Aktivierung eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder dem {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) bietet Zugriff auf das `ViewTransition` über die [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition)-Eigenschaft.

Lassen Sie uns einige Beispielcodes zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter gleich-dokumentierter (SPA) Übergang

Das folgende JavaScript könnte verwendet werden, um einen Kreisfreigabe-Ansichtsübergang zu erstellen, der von der Position des Benutzercursors beim Klicken ausgeht, wobei die Animation von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichts-Zustände in irgendeiner Weise überblenden (der neue Zustand „wischt“ direkt über den alten Zustand, anstatt einzublenden):

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

### Ein JavaScript-gesteuerter benutzerdefinierter dokumentübergreifender (MPA) Übergang

Das [Liste der Chrome DevRel-Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/)-Demo bietet einen grundlegenden Satz von Teamprofilseiten und zeigt, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event)- und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisse verwendet, um die ausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtsübergangs basierend auf den „from“- und „to“-URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignis-Listener sieht wie folgt aus. Dieser setzt Ansichtsübergangsnamen auf die ausgehenden Seitenelemente, die auf die Profilseiten verlinken. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das in jedem Fall geklickte verlinkte Element bereitgestellt.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem die Schnappschüsse in jedem Fall aufgenommen wurden. Wenn wir sie gesetzt lassen würden, würden sie im Seitenzustand gespeichert bleiben, der beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeichert wird. Wenn dann der Zurück-Button gedrückt wird, würde der `pagereveal`-Ereignis-Handler der Seite, zu der zurück navigiert wird, versuchen, dieselben `view-transition-name`-Werte auf verschiedenen Elementen zu setzen. Wenn mehrere Elemente denselben `view-transition-name` gesetzt haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignis-Listener sieht wie folgt aus. Dies funktioniert ähnlich wie der `pageswap`-Ereignis-Listener, obwohl hier zu beachten ist, dass wir die „to“-Animation für Seitenelemente auf der neuen Seite anpassen.

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

## Stabilisieren des Seitenszustands, um dokumentübergreifende Übergänge konsistent zu machen

Bevor Sie einen dokumentübergreifenden Übergang ausführen, möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, indem Sie {{Glossary("Render_blocking", "Rendering-Blockierung")}} nutzen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt sind.
3. Der sichtbare HTML-Code für die anfängliche Ansicht des Benutzers der Seite analysiert wurde, damit er konsistent gerendert wird.

Stile werden standardmäßig blockiert, und Skripte können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Reference/Elements/script#blocking) blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent angezeigt wird, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) verwenden. In diesem Element schließen Sie die folgenden Attribute ein:

- `rel="expect"`, um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML auf der Seite zu blockieren.
- `href="#element-id"`, um anzugeben, welches Element Sie blockieren möchten.
- `blocking="render"`, um das angegebene HTML zu blockieren.

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

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis das Hauptinhalts-`<div>` analysiert wurde, was einen konsistenten Ansichtsübergang gewährleistet.

Sie können auch ein [`media`](/de/docs/Web/HTML/Reference/Elements/link#media)-Attribut auf `<link rel="expect">`-Elementen spezifizieren. Zum Beispiel möchten Sie möglicherweise das Rendering bei einem schmaleren Gerät auf eine kleinere Menge Inhalt blockieren, als bei einem breiteren Gerät. Dies macht Sinn — auf einem mobilen Gerät wird weniger Inhalt sichtbar sein, wenn die Seite zum ersten Mal geladen wird, als im Fall eines Desktops.

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
