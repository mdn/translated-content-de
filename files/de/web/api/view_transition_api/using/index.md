---
title: Verwendung der View Transition API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: daa0f08c15e7626dd089a011b310a94db99dbfc1
---

{{DefaultAPISidebar("View Transition API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transition API](/de/docs/Web/API/View_Transition_API), wie man Ansichtsübergänge erstellt und die Übergangsanimationen anpasst und wie man aktive Ansichtsübergänge manipuliert. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-Anwendung (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-Anwendung (MPA).

## Der Prozess des Ansichtsübergangs

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt vom Typ des Ansichtsübergangs ab:
   - Im Fall von Übergängen im selben Dokument (SPAs) wird ein Ansichtsübergang durch das Übergeben der Funktion, die die DOM-Änderung für den Ansichtswechsel auslösen würde, als Callback an die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) ausgelöst.
   - Im Fall von dokumentübergreifenden Übergängen (MPAs) wird ein Ansichtsübergang durch die Initiierung einer Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle als auch das Ziel-Dokument der Navigation müssen auf demselben Ursprung sein und sich durch Einfügen einer {{cssxref("@view-transition")}} at-rule in ihrem CSS mit einem `navigation`-Deskriptor von `auto` für den Ansichtsübergang entscheiden.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz (zum Beispiel, zurückgegeben durch `startViewTransition()` im Fall von Übergängen im selben Dokument (SPA)). Das `ViewTransition`-Objekt enthält mehrere Promises, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergangsprozesses zu schreiben. Siehe [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript) für weitere Informationen.
2. Im aktuellen (alten Seiten-)Ansicht werden Schnappschüsse von Elementen aufgenommen, die eine {{cssxref("view-transition-name")}} deklariert haben.
3. Der Ansichtswechsel erfolgt:

   - Im Fall von Übergängen im selben Dokument (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, was dazu führt, dass sich das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das Promise [`ViewTransition.updateCallbackDone`](/de/docs/Web/API/ViewTransition/updateCallbackDone) erfüllt, was es Ihnen ermöglicht, auf die DOM-Aktualisierung zu reagieren.

   - Im Fall von dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und Ziel-Dokumenten.

4. Die API erfasst Schnappschüsse aus der neuen Ansicht als Live-Darstellung.

   An diesem Punkt steht der Ansichtsübergang kurz vor der Ausführung und das Promise [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) wird erfüllt, was es Ihnen ermöglicht, zum Beispiel durch Ausführung einer benutzerdefinierten JavaScript-Animation anstelle der Standardanimation zu reagieren.

5. Die alten Seitenschnappschüsse animieren "hinaus", während die neuen Ansichts-Schnappschüsse "hinein" animieren. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 auf 0 und die neuen Ansichts-Schnappschüsse animieren von `opacity` 0 auf 1, was ein Überblenden erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das Promise [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt, was es Ihnen erlaubt zu reagieren.

> [!NOTE]
> Wenn der [Sichtbarkeitszustand der Seite](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt ist, der Browser minimiert ist oder ein anderes Browser-Tab aktiv ist) während eines Anrufs von [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition), wird der Ansichtsübergang vollständig übersprungen.

### Der pseudo-element Baum des Ansichtsübergangs

Um die ausgehenden und eingehenden Übergangsanimationen zu erstellen, konstruiert die API einen Pseudo-Element-Baum mit der folgenden Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Unterbaum wird für jeden erfassten `view-transition-name` erstellt.

Im Fall von Übergängen im selben Dokument (SPAs) wird der Pseudo-Element-Baum im Dokument verfügbar gemacht. Im Fall von dokumentübergreifenden Übergängen (MPAs) wird der Pseudo-Element-Baum nur im Zieldokument verfügbar gemacht.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist die Wurzel des Ansichtsübergangs-Overlays, das alle Ansichtsübergangs-Schnappschuss-Gruppen enthält und über dem gesamten anderen Seiteninhalt liegt.
- Eine {{cssxref("::view-transition-group")}} fungiert als Container für jede Ansichtsübergangs-Schnappschuss-Gruppe. Das `root`-Argument gibt die Standard-Schnappschussgruppe an — die Ansichtsübergangs-Animation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, da die Standard-Browser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem sie das obige zurücksetzen und `view-transition-name: root` auf einem anderen Element setzen.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab, und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzter Inhalt gerendert, auf die gleiche Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit nützlichen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit verschiedenen benutzerdefinierten Ansichtsübergangs-Animationen zu zielen, indem man jedem ein anderes {{cssxref("view-transition-name")}} zuweist. In solchen Fällen wird eine `::view-transition-group` für jedes erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, müssen Sie zum Anpassen der ausgehenden und eingehenden Animationen die {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} Pseudo-Elemente ins Visier nehmen.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie man einen grundlegenden Ansichtsübergang erstellt, sowohl im SPA- als auch im MPA-Fall.

### Grundlegender SPA-Ansichtsübergang

Ein Beispiel dafür ist eine SPA, die Funktionen zum Abrufen neuer Inhalte und zur Aktualisierung des DOM als Reaktion auf eine Art von Ereignis enthalten kann, beispielsweise das Anklicken eines Navigationslinks oder eine Aktualisierung vom Server. In unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir das auf eine `displayNewImage()`-Funktion vereinfacht, die ein neues Vollbild anzeigt basierend auf dem Miniaturbild, das angeklickt wurde. Wir haben dies in eine `updateView()`-Funktion kapsuliert, die die View Transition API nur dann aufruft, wenn der Browser sie unterstützt:

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

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu handhaben. Unterstützende Browser zeigen die Änderung von alten zu neuen Bildern und Bildunterschriften als sanftes Überblenden (den Standardansichtsübergang) an. In nicht unterstützenden Browsern funktioniert es immer noch, jedoch ohne die nette Animation.

### Grundlegender MPA-Ansichtsübergang

Bei der Erstellung eines dokumentübergreifenden (MPA) Ansichtsübergangs ist der Prozess sogar einfacher als bei SPAs. Kein JavaScript ist erforderlich, da die Ansichtaktualisierung durch eine dokumentübergreifende, gleich-Ursprungsnavigation und nicht durch eine JavaScript-gestartete DOM-Änderung ausgelöst wird. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}} at-rule in das CSS für beide, das aktuelle und das Zieldokument, einsetzen, um sie einzubeziehen, wie folgt:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese at-rule in Aktion und demonstriert zusätzlich, wie man die [ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs anpasst.

> [!NOTE]
> Derzeit können MPA-Ansichtsübergänge nur zwischen Dokumenten desselben Ursprungs erstellt werden, aber diese Einschränkung könnte in zukünftigen Implementierungen gelockert werden.

## Anpassen Ihrer Animationen

Den pseudo-elementen der View Transitions werden standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zugewiesen (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transition_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge erhalten standardmäßig eine sanfte Überblenden-Animation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height` und `width` Übergänge haben eine sanfte Skalieranimation angewendet.
- `position` und `transform` Übergänge haben eine sanfte Bewegungsanimation angewendet.

Sie können die Standardanimationen in beliebiger Weise mit regulärem CSS modifizieren — zielen Sie auf die "from"-Animation mit {{cssxref("::view-transition-old")}}, und die "to"-Animation mit {{cssxref("::view-transition-new")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie das `::view-transition-group()` mit solchen Stilen anvisieren, wenn Sie sie auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der standardmäßigen Benutzer-Agent-Stilisierung werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu sichern — `::view-transition-group()` animiert ebenfalls und Sie könnten am Ende unterschiedliche Dauern für die `group`/`image-pair` Pseudo-Elemente gegenüber den `old` und `new` Pseudo-Elementen haben.

Im Fall von dokumentübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen verwenden möchten, müssen Sie ihn natürlich in beide einfügen.

Unser [View Transitions MPA Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das oben genannte CSS, geht jedoch noch einen Schritt weiter und definiert benutzerdefinierte Animationen, die auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente angewendet werden. Das Ergebnis ist, dass der Standardüberblendungsübergang durch einen "swipe up"-Übergang ersetzt wird, wenn eine Navigation erfolgt:

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

Standardmäßig werden alle unterschiedlichen Elemente, die sich während der Ansichtaktualisierung ändern, mit der gleichen Animation übergegangen. Wenn Sie möchten, dass einige Elemente anders als die Standard-`root`-Animation animiert werden, können Sie sie durch die Verwendung der {{cssxref("view-transition-name")}}-Eigenschaft trennen. Zum Beispiel haben in unserem [View Transitions SPA Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente ein `view-transition-name` von `figure-caption`, um sie in Bezug auf Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewandt, sieht der generierte Pseudo-Element-Baum jetzt so aus:

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

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht es, separate Ansichtsübergangsstile nur auf das `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtsaufnahmen werden getrennt voneinander behandelt.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, außer `none` — der `none`-Wert bedeutet speziell, dass das Element nicht an einem Ansichtsübergang teilnehmen wird.
>
> `view-transition-name`-Werte müssen ebenfalls einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe anderer Stile hinzugefügt, um sie an derselben Stelle zu halten und die Standardstilierung daran zu hindern, unsere benutzerdefinierten Animationen zu stören.

> [!NOTE]
> Sie können `*` als Bezeichner in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente anzuzielen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckten, die einfacher und ein angenehmeres Ergebnis als das obige produzierte. Unser endgültiger `<figcaption>`-Ansichtsübergang sah schließlich so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einem sanften Skalieren übergeht. Wir mussten nur eine feste `height` auf beiden Zuständen festlegen, um es zum Laufen zu bringen.

> **Hinweis:** [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere weitere Beispiele zur Anpassung.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugehörige [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objektinstanz, die mehrere Promise-Mitglieder enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) erfüllt, sobald der Pseudo-Element-Baum erstellt ist und die Animation kurz vor dem Start steht, während [`ViewTransition.finished`](/de/docs/Web/API/ViewTransition/finished) erfüllt wird, sobald die Animation abgeschlossen ist und die neue Seitenansicht für den Benutzer sichtbar und interaktiv ist.

Der `ViewTransition` kann folgendermaßen zugegriffen werden:

1. Im Fall von Übergängen im selben Dokument (SPA), gibt die Methode [`document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition) den `ViewTransition` zurück, der mit dem Übergang verknüpft ist.
2. Im Fall von dokumentübergreifenden (MPA) Übergängen:

   - Ein [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen wird. Sein Ereignisobjekt ([`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)) ermöglicht den Zugriff auf den `ViewTransition` über die Eigenschaft [`PageSwapEvent.viewTransition`](/de/docs/Web/API/PageSwapEvent/viewTransition), sowie auf eine [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) über [`PageSwapEvent.activation`](/de/docs/Web/API/PageSwapEvent/activation), die den Navigationstyp und die aktuellen und Ziel-Dokumenthistorieneinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine Cross-Origin-URL irgendwo in der Weiterleitungskette hat, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem {{Glossary("bfcache", "back/forward cache")}} (bfcache) oder aus dem {{Glossary("Prerender", "prerender")}}). Sein Ereignisobjekt ([`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)) ermöglicht den Zugriff auf den `ViewTransition` über die Eigenschaft [`PageRevealEvent.viewTransition`](/de/docs/Web/API/PageRevealEvent/viewTransition).

Lassen Sie uns einige Beispielcodes betrachten, um zu zeigen, wie diese Funktionen verwendet werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter Übergang im gleichen Dokument (SPA)

Der folgende JavaScript-Code könnte verwendet werden, um einen kreisförmigen Enthüllungs-Ansichtsübergang zu erstellen, der sich von der Position des Benutzermauszeigers aus entfaltet, mit einer Animation, die von der [Web Animations API](/de/docs/Web/API/Web_Animations_API) bereitgestellt wird.

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

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Anzeigestände in irgendeiner Weise vermischt werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt hinein zu übergehen):

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

Das [Verzeichnis der Chrome DevRel Teammitglieder](https://view-transitions.chrome.dev/profiles/mpa/) Demo bietet eine grundlegende Sammlung von Teamprofilseiten und zeigt, wie man die [`pageswap`](/de/docs/Web/API/Window/pageswap_event) und [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisse nutzt, um die ausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtsübergangs basierend auf den "von" und "zu" URLs anzupassen.

Der [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis-Listener sieht folgendermaßen aus. Dies setzt die Ansichtsübergangs-Namen auf den Elementen der ausgehenden Seite, die zu den Profilseiten verlinken. Wenn von der Startseite zu einer Profilseite navigiert wird, werden benutzerdefinierte Animationen _nur_ für das verlinkte Element bereitgestellt, das in jedem Fall geklickt wird.

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
> Wir entfernen die `view-transition-name`-Werte, nachdem in jedem Fall Schnappschüsse aufgenommen wurden. Würden wir sie gesetzt lassen, würden sie im beim Navigieren im {{Glossary("bfcache", "bfcache")}} gespeicherten Seitenzustand erhalten bleiben. Wenn dann die Rücktaste gedrückt wird, würde der `pagereveal` Ereignis-Handler der Seite, zu der zurücknavigiert wird, versuchen, dieselben `view-transition-name`-Werte auf verschiedene Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name`haben, wird der Ansichtsübergang übersprungen.

Der [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignis-Listener funktioniert ähnlich wie der `pageswap` Ereignis-Listener, wobei hier zu beachten ist, dass wir die "to"-Animation für Seitenelemente auf der neuen Seite anpassen.

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

## Stabilisierung des Seitenzustands zur konsistenten Durchführung dokumentübergreifender Übergänge

Vor der Ausführung eines dokumentübergreifenden Übergangs möchten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist und sich auf {{Glossary("Render_blocking", "Renderblocking")}} verlassen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet sind.
2. Kritische Skripte geladen und ausgeführt wurden.
3. Das HTML, das für die erste Ansicht der Seite des Benutzers sichtbar ist, analysiert wurde, um konsistent gerendert zu werden.

Stile werden standardmäßig, gerendert blockiert, und Skripte können durch das Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) gerendert blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wurde und immer konsistent rendert, bevor die Übergangsanimation ausgeführt wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element enthalten Sie die folgenden Attribute:

- `rel="expect"` um anzugeben, dass Sie dieses `<link>`-Element verwenden möchten, um etwas HTML auf der Seite zu renderblockieren.
- `href="#element-id"` um die ID des Elements anzugeben, das Sie renderblockieren möchten.
- `blocking="render"` um das angegebene HTML zu renderblockieren.

Sehen wir uns an, wie dies mit einem Beispiel-HTML-Dokument aussieht:

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

Das Ergebnis ist, dass das Rendern des Dokuments blockiert wird, bis das Leitende-Inhalt-`<div>` analysiert wurde, was einen konsistenten Ansichtsübergang sicherstellt.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media) Attribut auf `<link rel="expect">` Elementen angeben. Zum Beispiel könnten Sie beim Laden der Seite auf einem Gerät mit schmalem Bildschirm weniger Inhalt rendern blocken wollen als auf einem Gerät mit großem Bildschirm. Dies ist sinnvoll — auf einem Mobilgerät wird beim ersten Laden der Seite weniger Inhalt sichtbar sein als bei einem Desktop.

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
