---
title: Verwendung der View Transitions API
slug: Web/API/View_Transitions_API/Using
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("View Transitions API")}}

Dieser Artikel erklärt die Theorie hinter der Funktionsweise der [View Transitions API](/de/docs/Web/API/View_Transitions_API), wie Sie Ansichtsübergänge erstellen und die Übergangsanimationen anpassen können, und wie Sie aktive Ansichtsübergänge manipulieren können. Dies umfasst Ansichtsübergänge sowohl für DOM-Zustandsaktualisierungen in einer Single-Page-App (SPA) als auch für die Navigation zwischen Dokumenten in einer Multi-Page-App (MPA).

## Der Ansichtsübergangsprozess

Lassen Sie uns den Prozess durchgehen, wie ein Ansichtsübergang funktioniert:

1. Ein Ansichtsübergang wird ausgelöst. Wie dies geschieht, hängt vom Typ des Ansichtsübergangs ab:
   - Im Fall von Dokumentübergreifenden Übergängen (SPAs) wird ein Ansichtsübergang ausgelöst, indem die Funktion, die die DOM-Aktualisierung des Ansichtswechsels auslösen würde, als Callback an die Methode {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} übergeben wird.
   - Bei dokumentübergreifenden Übergängen (MPAs) wird ein Ansichtsübergang durch die Navigation zu einem neuen Dokument ausgelöst. Sowohl das aktuelle Dokument als auch das Zieldokument der Navigation müssen denselben Ursprung haben und sich in den Ansichtsübergang einbinden, indem sie eine {{cssxref("@view-transition")}}-Regel in ihrem CSS mit einem `navigation`-Deskriptor von `auto` einschließen.
     > [!NOTE]
     > Ein aktiver Ansichtsübergang hat eine zugeordnete {{domxref("ViewTransition")}} Instanz (zum Beispiel, zurückgegeben durch `startViewTransition()` im Fall von dokumentübergreifenden (SPA) Übergängen). Das `ViewTransition`-Objekt enthält mehrere Versprechen, die es Ihnen ermöglichen, Code als Reaktion auf verschiedene Teile des Ansichtsübergangsprozesses auszuführen. Weitere Informationen finden Sie unter [Steuerung von Ansichtsübergängen mit JavaScript](#steuerung_von_ansichtsübergängen_mit_javascript).
2. Auf der aktuellen (alten Seite) Ansicht erfasst die API Schnappschüsse von Elementen, die einen {{cssxref("view-transition-name")}} deklariert haben.
3. Der Ansichtswechsel tritt auf:

   - Im Fall von dokumentübergreifenden Übergängen (SPAs) wird der an `startViewTransition()` übergebene Callback aufgerufen, der das DOM ändert.

     Wenn der Callback erfolgreich ausgeführt wurde, wird das {{domxref("ViewTransition.updateCallbackDone")}}-Versprechen erfüllt, sodass Sie auf die DOM-Aktualisierung reagieren können.

   - Im Fall von dokumentübergreifenden Übergängen (MPAs) erfolgt die Navigation zwischen den aktuellen und den Zieldokumenten.

4. Die API erfasst Schnappschüsse der neuen Ansicht als Darstellung in Echtzeit.

   An diesem Punkt soll der Ansichtsübergang ablaufen, und das {{domxref("ViewTransition.ready")}}-Versprechen wird erfüllt und ermöglicht es Ihnen, beispielsweise eine benutzerdefinierte JavaScript-Animation auszuführen, anstatt der Standardanimation.

5. Die Schnappschüsse der alten Seite werden "ausgeblendet", während die Schnappschüsse der neuen Ansicht "eingeblendet" werden. Standardmäßig animieren die alten Ansichts-Schnappschüsse von {{cssxref("opacity")}} 1 auf 0, und die neuen Ansichts-Schnappschüsse animieren von `opacity` 0 auf 1, was einen Cross-Fade-Effekt erzeugt.
6. Wenn die Übergangsanimationen ihre Endzustände erreicht haben, wird das {{domxref("ViewTransition.finished")}}-Versprechen erfüllt, sodass Sie reagieren können.

> [!NOTE]
> Wenn der [Seiten-Sichtbarkeitszustand](/de/docs/Web/API/Page_Visibility_API) des Dokuments `hidden` ist (zum Beispiel, wenn das Dokument durch ein Fenster verdeckt wird, der Browser minimiert ist oder ein anderer Browser-Tab aktiv ist) während eines Aufrufs von {{domxref("Document.startViewTransition()", "document.startViewTransition()")}}, wird der Ansichtsübergang vollständig übersprungen.

### Der Ansichtsübergangspseudo-Elementbaum

Um die ausgehenden und eingehenden Übergangsanimationen zu handhaben, konstruiert die API einen Pseudo-Elementbaum mit folgender Struktur:

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> Ein {{cssxref("::view-transition-group")}} Unterbaum wird für jede erfasste `view-transition-name` erstellt.

Im Fall von dokumentübergreifenden Übergängen (SPAs) steht der Pseudo-Elementbaum im Dokument zur Verfügung. Im Fall von dokumentübergreifenden Übergängen (MPAs) steht der Pseudo-Elementbaum nur im Zieldokument zur Verfügung.

Die interessantesten Teile der Baumstruktur sind wie folgt:

- {{cssxref("::view-transition")}} ist das Wurzel-Overlay der Ansichtsübergänge, das alle Ansichtsübergangs-Schnappschussgruppen enthält und über dem gesamten anderen Seiteninhalt sitzt.
- Ein {{cssxref("::view-transition-group")}} fungiert als Container für jede Ansichtsübergangs-Schnappschussgruppe. Das `root`-Argument gibt die Standard-Schnappschussgruppe an — die Ansichtsübergangsanimation wird auf den Schnappschuss angewendet, dessen `view-transition-name` `root` ist. Standardmäßig ist dies das {{cssxref(":root")}}-Element, weil die Standardbrowser-Stile dies definieren:

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  Beachten Sie jedoch, dass Seitenautoren dies ändern können, indem das oben genannte aufgehoben und `view-transition-name: root` auf ein anderes Element gesetzt wird.

- {{cssxref("::view-transition-old")}} zielt auf den statischen Schnappschuss des alten Seitenelements ab und {{cssxref("::view-transition-new")}} zielt auf den Live-Schnappschuss des neuen Seitenelements ab. Beide werden als ersetzte Inhalte gerendert, in gleicher Weise wie ein {{htmlelement("img")}} oder {{htmlelement("video")}}, was bedeutet, dass sie mit praktischen Eigenschaften wie {{cssxref("object-fit")}} und {{cssxref("object-position")}} gestylt werden können.

> [!NOTE]
> Es ist möglich, verschiedene DOM-Elemente mit unterschiedlichen benutzerdefinierten Ansichtsübergangsanimationen zu versehen, indem auf jedem ein anderer {{cssxref("view-transition-name")}} eingestellt wird. In solchen Fällen wird ein `::view-transition-group` für jedes erstellt. Siehe [Verschiedene Animationen für verschiedene Elemente](#verschiedene_animationen_für_verschiedene_elemente) für ein Beispiel.

> [!NOTE]
> Wie Sie später sehen werden, um die ausgehenden und eingehenden Animationen anzupassen, müssen Sie die {{cssxref("::view-transition-old")}} und {{cssxref("::view-transition-new")}} Pseudo-Elemente jeweils mit Ihren Animationen ansprechen.

## Erstellen eines grundlegenden Ansichtsübergangs

Dieser Abschnitt veranschaulicht, wie ein grundlegender Ansichtsübergang sowohl im Fall von SPAs als auch MPAs erstellt wird.

### Grundlegender SPA-Ansichtsübergang

Als Beispiel kann eine SPA Funktionalität enthalten, um neue Inhalte abzurufen und das DOM als Reaktion auf ein Ereignis wie z.B. einen Mausklick auf einen Navigationslink oder eine vom Server gepushte Aktualisierung zu aktualisieren. In unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) haben wir dies auf eine `displayNewImage()`-Funktion vereinfacht, die ein neues Vollbildbild basierend auf dem geklickten Thumbnail zeigt. Wir haben dies in einer `updateView()`-Funktion gekapselt, die die View Transition API nur dann aufruft, wenn der Browser sie unterstützt:

```js
function updateView(event) {
  // Unterscheidet, ob das Ereignis auf <a> oder <img> ausgelöst wird
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // Fallback für Browser, die View Transitions nicht unterstützen:
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // Mit View Transitions:
  const transition = document.startViewTransition(() => displayNewImage());
}
```

Dieser Code reicht aus, um den Übergang zwischen angezeigten Bildern zu verwalten. Unterstützende Browser zeigen den Wechsel von alten zu neuen Bildern und Bildunterschriften als sanften Cross-Fade (den Standardansichtsübergang) an. Es wird auch in nicht unterstützenden Browsern funktionieren, jedoch ohne die schöne Animation.

### Grundlegender MPA-Ansichtsübergang

Bei der Erstellung eines dokumentübergreifenden (MPA) Ansichtsübergangs ist der Prozess sogar noch einfacher als bei SPAs. Kein JavaScript ist erforderlich, da die Ansicht aktualisiert wird, wenn eine dokumentübergreifende, gleichgerichtete Navigation erfolgt, anstatt einer durch JavaScript initiierten DOM-Änderung. Um einen grundlegenden MPA-Ansichtsübergang zu aktivieren, müssen Sie eine {{cssxref("@view-transition")}}-Regel im CSS sowohl für das aktuelle als auch das Zieldokument angeben, um sie einzubinden, zum Beispiel so:

```css
@view-transition {
  navigation: auto;
}
```

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) zeigt diese Regel in Aktion und demonstriert zusätzlich, wie [die ausgehenden und eingehenden Animationen](#anpassen_ihrer_animationen) des Ansichtsübergangs angepasst werden.

> [!NOTE]
> Aktuell können MPA-Ansichtsübergänge nur zwischen Dokumenten desselben Ursprungs erstellt werden, diese Einschränkung könnte aber in zukünftigen Implementierungen aufgehoben werden.

## Anpassen Ihrer Animationen

Die View Transitions Pseudo-Elemente haben standardmäßig [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) angewendet (die in ihren [Referenzseiten](/de/docs/Web/API/View_Transitions_API#pseudo-elements) detailliert sind).

Die meisten Erscheinungsübergänge haben standardmäßig eine sanfte Cross-Fade-Animation, wie oben erwähnt. Es gibt einige Ausnahmen:

- `height`- und `width`-Übergänge haben eine sanfte Skalierung animiert.
- `position`- und `transform`-Übergänge haben eine sanfte Bewegungsanimation.

Sie können die Standardanimationen beliebig mit regulärem CSS ändern — zielen Sie die "from"-Animation mit {{cssxref("::view-transition-old")}} an, und die "to"-Animation mit {{cssxref("::view-transition-new")}}.

Zum Beispiel, um die Geschwindigkeit beider zu ändern:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

Es wird empfohlen, dass Sie den `::view-transition-group()` mit solchen Stilen ansprechen, wenn Sie diese auf `::view-transition-old()` und `::view-transition-new()` anwenden möchten. Aufgrund der Pseudo-Element-Hierarchie und der Standard-Benutzer-Agenten-Stylings werden die Stile von beiden geerbt. Zum Beispiel:

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> Dies ist auch eine gute Option, um Ihren Code zu schützen — `::view-transition-group()` animiert ebenfalls, und Sie könnten unterschiedliche Dauern für die `group`/`image-pair` Pseudo-Elemente im Vergleich zu den `old` und `new` Pseudo-Elementen haben.

Im Fall von dokumentübergreifenden (MPA) Übergängen müssen die Pseudo-Elemente nur im Zieldokument enthalten sein, damit der Ansichtsübergang funktioniert. Wenn Sie den Ansichtsübergang in beide Richtungen nutzen möchten, müssen Sie ihn natürlich in beiden Dokumenten einbinden.

Unser [View Transitions MPA-Demo](https://mdn.github.io/dom-examples/view-transitions/mpa/) enthält das obige CSS, geht aber einen Schritt weiter, indem es benutzerdefinierte Animationen definiert und auf die `::view-transition-old(root)` und `::view-transition-new(root)` Pseudo-Elemente anwendet. Das Ergebnis ist, dass der Standard-Cross-Fade-Übergang bei einer Navigation gegen einen "Swipe-Up"-Übergang ausgetauscht wird:

```css
/* Erstelle eine benutzerdefinierte Animation */

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

/* Wende die benutzerdefinierte Animation auf die alten und neuen Seitenzustände an */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## Verschiedene Animationen für verschiedene Elemente

Standardmäßig werden alle unterschiedlichen Elementen, die sich während des Ansichtswechsels ändern, mit der gleichen Animation überführt. Wenn einige Elemente anders als die Standard-`root`-Animation animiert werden sollen, können Sie sie mit der {{cssxref("view-transition-name")}}-Eigenschaft trennen. Zum Beispiel erhalten in unserem [View Transitions SPA-Demo](https://mdn.github.io/dom-examples/view-transitions/spa/) die {{htmlelement("figcaption")}}-Elemente einen `view-transition-name` von `figure-caption`, um sie in Bezug auf die Ansichtsübergänge vom Rest der Seite zu trennen:

```css
figcaption {
  view-transition-name: figure-caption;
}
```

Mit diesem CSS angewendet, sieht der generierte Pseudo-Elementbaum jetzt wie folgt aus:

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

Das Vorhandensein des zweiten Satzes von Pseudo-Elementen ermöglicht es, einen separaten Ansichtsübergangsstil nur auf die `<figcaption>` anzuwenden. Die unterschiedlichen alten und neuen Ansichtserfassungen werden unabhängig voneinander verarbeitet.

> [!NOTE]
> Der Wert von `view-transition-name` kann alles sein, was Sie wollen, außer `none` — der Wert `none` bedeutet ausdrücklich, dass das Element nicht an einem Ansichtsübergang teilnehmen wird.
>
> `view-transition-name`-Werte müssen ebenfalls eindeutig sein. Wenn zwei gerenderte Elemente zur selben Zeit denselben `view-transition-name` haben, wird {{domxref("ViewTransition.ready")}} abgelehnt und der Übergang wird übersprungen.

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

Hier haben wir eine benutzerdefinierte CSS-Animation erstellt und sie auf die `::view-transition-old(figure-caption)` und `::view-transition-new(figure-caption)` Pseudo-Elemente angewendet. Wir haben auch eine Reihe weiterer Stile hinzugefügt, um sie an derselben Stelle zu halten und zu verhindern, dass das Standardstyling unsere benutzerdefinierten Animationen beeinträchtigt.

> [!NOTE]
> Sie können `*` als Identifikator in einem Pseudo-Element verwenden, um alle Schnappschuss-Pseudo-Elemente anzusprechen, unabhängig davon, welchen Namen sie haben. Zum Beispiel:
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### Nutzung der Standardanimationsstile

Beachten Sie, dass wir auch eine andere Übergangsoption entdeckt haben, die einfacher ist und ein schöneres Ergebnis als die oben genannte erzeugt. Unser endgültiger `<figcaption>`-Ansichtsübergang sah letzten Endes so aus:

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

Dies funktioniert, weil `::view-transition-group` standardmäßig `width` und `height` zwischen den alten und neuen Ansichten mit einer sanften Skalierung überträgt. Wir mussten nur eine feste `height` auf beide Zustände setzen, um es zum Funktionieren zu bringen.

> **Hinweis:** [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) enthält mehrere weitere Anpassungsbeispiele.

## Steuerung von Ansichtsübergängen mit JavaScript

Ein Ansichtsübergang hat eine zugeordnete {{domxref("ViewTransition")}} Objektinstanz, die mehrere Versprechen enthält, die es Ihnen ermöglichen, JavaScript als Reaktion auf verschiedene Zustände des Übergangs auszuführen. Zum Beispiel wird {{domxref("ViewTransition.ready")}} erfüllt, sobald der Pseudo-Elementbaum erstellt und die Animation zum Start bereit ist, während {{domxref("ViewTransition.finished")}} erfüllt wird, wenn die Animation beendet ist, und die neue Seitenansicht sichtbar und interaktiv für den Benutzer ist.

Der `ViewTransition` kann wie folgt zugegriffen werden:

1. Bei dokumentübergreifenden (SPA) Übergängen gibt die Methode {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} das mit dem Übergang assoziierte `ViewTransition` zurück.
2. Bei dokumentübergreifenden (MPA) Übergängen:

   - Ein {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis wird ausgelöst, wenn ein Dokument aufgrund einer Navigation entladen werden soll. Sein Ereignisobjekt ({{domxref("PageSwapEvent")}}) bietet Zugriff auf das `ViewTransition` über die {{domxref("PageSwapEvent.viewTransition")}}-Eigenschaft sowie auf eine {{domxref("NavigationActivation")}} über {{domxref("PageSwapEvent.activation")}}, die den Navigationstyp und die aktuellen und Ziel-Dokumentverlaufseinträge enthält.
     > [!NOTE]
     > Wenn die Navigation eine URL mit einem anderen Ursprung irgendwo in der Umleitungskette enthält, gibt die `activation`-Eigenschaft `null` zurück.
   - Ein {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis wird ausgelöst, wenn ein Dokument erstmals gerendert wird, entweder beim Laden eines frischen Dokuments aus dem Netzwerk oder beim Aktivieren eines Dokuments (entweder aus dem [back/forward cache](/de/docs/Glossary/bfcache) (bfcache) oder [Vorrendern](/de/docs/Glossary/Prerender)). Sein Ereignisobjekt ({{domxref("PageRevealEvent")}}) bietet Zugriff auf das `ViewTransition` über die {{domxref("PageRevealEvent.viewTransition")}}-Eigenschaft.

Lassen Sie uns einige Beispielcodes betrachten, um zu zeigen, wie diese Funktionen genutzt werden könnten.

### Ein JavaScript-gesteuerter benutzerdefinierter dokumentübergreifender (SPA) Übergang

Das folgende JavaScript könnte verwendet werden, um einen kreisförmigen Ansichtsübergang zu erstellen, der von der Position des Cursors des Benutzers bei einem Klick ausgeht, wobei die Animation durch die {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} bereitgestellt wird.

```js
// Speichern des letzten Klickereignisses
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // Fallback für Browser, die diese API nicht unterstützen:
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // Holen Sie sich die Klickposition oder verwenden Sie alternativ die Mitte des Bildschirms
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Bestimmen Sie die Distanz zur entferntesten Ecke
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Erstellen Sie einen Übergang:
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // Warten auf die Erstellung der Pseudo-Elemente:
  transition.ready.then(() => {
    // Animieren Sie die neue Ansicht des Wurzel-Elements
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
        // Geben Sie an, welches Pseudo-Element animiert werden soll
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

Diese Animation erfordert auch das folgende CSS, um die Standard-CSS-Animation auszuschalten und zu verhindern, dass die alten und neuen Ansichts-Zustände in irgendeiner Weise überblendet werden (der neue Zustand "wischt" direkt über den alten Zustand, anstatt hineinzutransitionieren):

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

Das [List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/)-Demo bietet eine grundlegende Reihe von Teamprofilseiten und demonstriert, wie die Ereignisse {{domxref("Window.pageswap_event", "pageswap")}} und {{domxref("Window.pagereveal_event", "pagereveal")}} verwendet werden können, um die ausgehenden und eingehenden Animationen eines dokumentübergreifenden Ansichtsübergangs basierend auf den "von"- und "zu"-URLs anzupassen.

Der {{domxref("Window.pageswap_event", "pageswap")}}-Ereignis-Listener sieht wie folgt aus. Dieser setzt Ansichtsübergangsnamen auf den Elementen auf der auslaufenden Seite, die zu den Profilseiten verlinken. Beim Navigieren von der Startseite zu einer Profilseite werden benutzerdefinierte Animationen _nur_ für das angeklickte verlinkte Element bereitgestellt.

```js
window.addEventListener("pageswap", async (e) => {
  // Führen Sie dies nur aus, wenn ein aktiver Ansichtsübergang existiert
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // Vom Profil zur Startseite wechseln
    // ~> Das große Bild und der Titel sind die richtigen!
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // Setzen Sie die view-transition-name Werte auf die zu animierenden Elemente
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die view-transition-names, nachdem die Schnappschüsse gemacht wurden
      // Verhindert Namenskonflikte durch das Festhalten des Seitenzustands im BFCache
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Zum Profil wechseln
    // ~> Die angeklickten Einträge sind die richtigen!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // Setzen Sie die view-transition-name Werte auf die zu animierenden Elemente
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die view-transition-names, nachdem die Schnappschüsse gemacht wurden
      // Verhindert Namenskonflikte durch das Festhalten des Seitenzustands im BFCache
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
> Wir entfernen die `view-transition-name` Werte, nachdem die Schnappschüsse in jedem Fall gemacht wurden. Wenn wir sie eingestellt ließen, würden sie im Seitenzustand gespeichert, der beim Navigieren im [bfcache](/de/docs/Glossary/bfcache) gespeichert wird. Wenn dann die Zurück-Taste gedrückt wird, würde der `pagereveal`-Ereignis-Handler der zurückgekehrten Seite versuchen, dieselben `view-transition-name` Werte auf verschiedene Elemente zu setzen. Wenn mehrere Elemente denselben `view-transition-name` haben, wird der Ansichtsübergang übersprungen.

Der {{domxref("Window.pagereveal_event", "pagereveal")}}-Ereignis-Listener sieht wie folgt aus. Dies funktioniert auf ähnliche Weise wie der `pageswap`-Ereignis-Listener, wobei jedoch beachtet werden muss, dass wir hier die "to"-Animation für Seitenelemente auf der neuen Seite anpassen.

```js
window.addEventListener("pagereveal", async (e) => {
  // Wenn der "von"-Verlaufseintrag nicht existiert, zurückkehren
  if (!navigation.activation.from) return;

  // Führen Sie dies nur aus, wenn ein aktiver Ansichtsübergang existiert
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // Vom Profil zur Startseite gewechselt
    // ~> Setzen Sie die VT-Namen auf den entsprechenden Listeneintrag
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // Setzen Sie die view-transition-name Werte auf die zu animierenden Elemente
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die Namen, nachdem die Schnappschüsse gemacht wurden
      // damit wir für die nächste Navigation bereit sind
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // Zum Profil gewechselt
    // ~> Setzen Sie die VT-Namen auf den Haupttitel und das Bild
    if (isProfilePage(currentUrl)) {
      // Setzen Sie die view-transition-name Werte auf die zu animierenden Elemente
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // Entfernen Sie die Namen, nachdem die Schnappschüsse gemacht wurden
      // damit wir für die nächste Navigation bereit sind
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## Stabilisierung des Seitenzustands, um konsistente dokumentübergreifende Übergänge zu gewährleisten

Bevor Sie einen dokumentübergreifenden Übergang durchführen, sollten Sie idealerweise warten, bis der Zustand der Seite stabilisiert ist, indem Sie auf [Render-Blocking](/de/docs/Glossary/Render_blocking) zurückgreifen, um sicherzustellen, dass:

1. Kritische Stile geladen und angewendet werden.
2. Kritische Skripte geladen und ausgeführt werden.
3. Das HTML, das für die erste Ansicht des Benutzers sichtbar ist, analysiert ist, sodass es konsistent gerendert wird.

Stile sind standardmäßig render-blockiert, und Skripte können mit dem Attribut [`blocking="render"`](/de/docs/Web/HTML/Element/script#blocking) render-blockiert werden.

Um sicherzustellen, dass Ihr anfängliches HTML analysiert wird und vor Aktivierung der Übergangsanimation immer konsistent gerendert wird, können Sie [`<link rel="expect">`](/de/docs/Web/HTML/Attributes/rel#expect) verwenden. In diesem Element enthalten Sie die folgenden Attribute:

- `rel="expect"`, um anzuzeigen, dass Sie dieses `<link>`-Element verwenden möchten, um einige HTML-Elemente auf der Seite zu render-blockieren.
- `href="#element-id"`, um die ID des Elements anzugeben, das render-blockiert werden soll.
- `blocking="render"`, um das angegebene HTML zu render-blockieren.

Lassen Sie uns ein einfaches HTML-Dokumentbeispiel betrachten:

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- Dies wird standardmäßig render-blockiert -->
    <link rel="stylesheet" href="style.css" />

    <!-- Kritische Skripte als render-blockierend kennzeichnen, um sicherzustellen,
         dass sie vor der Aktivierung des Ansichtsübergangs ausgeführt werden -->
    <script async href="layout.js" blocking="render"></script>

    <!-- Verwenden Sie rel="expect" und blocking="render", um sicherzustellen,
         dass das #lead-content Element sichtbar und vollständig analysiert ist,
         bevor der Übergang aktiviert wird -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Seitentitel</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">Der erste Abschnitt</section>
      <section>Der zweite Abschnitt</section>
    </div>
  </body>
</html>
```

Das Ergebnis ist, dass das Dokument-Rendering blockiert wird, bis das `<div>` des Lead-Inhalts analysiert wurde, und so einen konsistenten Ansichtsübergang gewährleistet.

Sie können auch ein [`media`](/de/docs/Web/HTML/Element/link#media)-Attribut in den `<link rel="expect">`-Elementen angeben. Zum Beispiel könnten Sie beim Laden der Seite auf einem Gerät mit kleinem Bildschirm weniger Inhalt render-blockieren wollen als bei einem mit großem Bildschirm. Dies macht Sinn — auf einem Mobilgerät wird beim ersten Laden der Seite weniger Inhalt sichtbar sein als bei einem Desktop.

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
