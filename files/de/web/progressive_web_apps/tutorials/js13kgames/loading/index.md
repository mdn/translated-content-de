---
title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Beispiel zu einer Progressive Web App zu machen: [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifeste](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel gehen wir einen Schritt weiter und verbessern die Leistung der App, indem wir ihre Ressourcen progressiv laden.

## Erster bedeutungsvoller Anstrich

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Bedeutungsvolles zu liefern – je länger er darauf wartet, dass die Seite geladen wird, desto größer ist die Wahrscheinlichkeit, dass er geht, bevor alles fertig geladen ist. Wir sollten in der Lage sein, ihnen zumindest die Grundansicht der Seite zu zeigen, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen mehr Inhalte geladen werden.

Dies könnte durch progressives Laden erreicht werden – auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading). Dabei geht es darum, das Laden so vieler Ressourcen wie möglich (HTML, CSS, JavaScript) zu verzögern und nur die sofort zu laden, die wirklich für das erste Erlebnis benötigt werden.

## Bündelung versus Aufteilung

Viele Besucher werden nicht jede einzelne Seite einer Website durchsuchen, dennoch ist der übliche Ansatz, alle Funktionen, die wir haben, in eine große Datei zu bündeln. Eine `bundle.js`-Datei kann viele Megabyte sein, und ein einzelnes `style.css`-Bündel kann alles von grundlegenden CSS-Strukturdefinitionen bis hin zu allen möglichen Stilen jeder Version der Website enthalten: mobil, Tablet, Desktop, nur Druck usw.

Es ist schneller, all diese Informationen in einer Datei statt in vielen kleinen zu laden, aber wenn der Benutzer nicht alles von Anfang an benötigt, könnten wir nur das Notwendige laden und andere Ressourcen bei Bedarf verwalten.

## Render-blockierende Ressourcen

Die Bündelung ist ein Problem, da der Browser HTML, CSS und JavaScript laden muss, bevor er ihre gerenderten Ergebnisse auf dem Bildschirm anzeigen kann. Während der wenigen Sekunden zwischen dem ersten Zugriff auf die Website und dem Abschluss des Ladens sieht der Benutzer eine leere Seite, was eine schlechte Erfahrung ist.

Um dies zu beheben, können wir beispielsweise `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und ausgeführt _nachdem_ das Dokument selbst geparst wurde, sodass es das Rendern der HTML-Struktur nicht blockiert.

Eine weitere Technik ist es, JavaScript-Module mit [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import) nur bei Bedarf zu laden.

Zum Beispiel, wenn eine Website einen Suchknopf hat, können wir das JavaScript für die Suchfunktion erst laden, nachdem der Benutzer auf den Suchknopf geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Benutzer auf den Knopf klickt, wird der asynchrone Klick-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()`-Funktion auf, die aus diesem Modul exportiert wird. Das `search.js`-Modul wird also nur heruntergeladen, geparst und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und ihnen Medientypen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies informiert den Browser, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um alles in einer einzigen Datei zu belassen, ohne spezifische Regeln, wie sie geladen werden sollten. Wir könnten sogar noch weiter gehen und alles von `style.css` in das `<style>`-Tag im `<head>` von `index.html` verschieben – dies würde die Leistung noch weiter verbessern, aber um die Lesbarkeit des Beispiels zu wahren, werden wir diesen Ansatz ebenfalls überspringen.

## Bilder

Neben JavaScript und CSS enthalten Websites wahrscheinlich eine Reihe von Bildern. Wenn Sie {{htmlelement("img")}}-Elemente in Ihr HTML einfügen, wird jedes referenzierte Bild beim ersten Zugriff auf die Website abgerufen und geladen. Es ist nicht ungewöhnlich, mehrere Megabyte an Bilddaten herunterzuladen, bevor angekündigt wird, dass die Website bereit ist, was erneut eine schlechte Wahrnehmung der Leistung schafft. Wir benötigen nicht alle Bilder in bestmöglicher Qualität gleich zu Beginn des Betrachtens der Website.

Dies kann optimiert werden. Zuerst sollten Sie Werkzeuge oder Dienste ähnlich wie [TinyPNG](https://tinypng.com/) verwenden, die die Dateigröße Ihrer Bilder reduzieren, ohne die Qualität zu sehr zu verändern. Wenn Sie diesen Punkt überschritten haben, können Sie beginnen, über die Optimierung des Bildladens mit JavaScript nachzudenken. Wir erklären das unten genauer.

### Platzhalterbild

Anstatt alle Screenshots von Spielen in den `src`-Attributen der `<img>`-Elemente zu referenzieren, was den Browser zwingt, sie automatisch herunterzuladen, können wir es selektiv über JavaScript tun. Die js13kPWA-App verwendet stattdessen ein Platzhalterbild, das klein und leichtgewichtig ist, während die endgültigen Pfade zu den Zielbildern in `data-src`-Attributen gespeichert sind:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden über JavaScript geladen _nachdem_ die Seite die HTML-Struktur aufgebaut hat. Das Platzhalterbild wird auf dieselbe Weise skaliert wie die Originalbilder, sodass es denselben Platz einnimmt und beim Laden der Bilder kein Neuzeichnen des Layouts verursacht.

### Laden über JavaScript

Die Datei `app.js` verarbeitet die `data-src`-Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die Variable `imagesToLoad` enthält Referenzen auf alle Bilder, während die Funktion `loadImages` den Pfad aus `data-src` nach `src` verschiebt. Wenn jedes Bild tatsächlich geladen wird, entfernen wir sein `data-src`-Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Blur in CSS

Um das ganze Prozess optisch ansprechender zu gestalten, wird der Platzhalter in CSS verschwommen dargestellt.

![Screenshot von Platzhalterbildern in der js13kPWA-App.](js13kpwa-placeholders.png)

Wir rendern die Bilder zu Beginn mit einem Weichzeichner, sodass ein Übergang zum scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dies wird den Unschärfeeffekt innerhalb einer halben Sekunde entfernen, was für den "Laden"-Effekt gut genug aussieht.

## Laden auf Abruf

Der im obigen Abschnitt diskutierte Mechanismus zum Laden von Bildern funktioniert gut – er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet dabei einen schönen Übergangseffekt an. Das Problem besteht darin, dass es immer noch _alle_ Bilder auf einmal lädt, obwohl der Benutzer nur die ersten zwei oder drei beim Laden der Seite sehen wird.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: dies nennt man _Lazy Loading_. [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Viewport erscheinen. Es gibt mehrere Möglichkeiten, dem Browser mitzuteilen, dass er Bilder lazy loaden soll.

### Das `loading`-Attribut auf \<img>

Der einfachste Weg, dem Browser mitzuteilen, dass er verzögert laden soll, umfasst kein JavaScript. Sie fügen das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut einem {{HTMLElement("img")}}-Element mit dem Wert `lazy` hinzu, und der Browser wird wissen, dass dieses Bild nur bei Bedarf geladen werden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung des zuvor funktionierenden Beispiels – [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) wird Zielbilder nur laden, wenn der Benutzer nach unten scrollt, wodurch sie im Viewport angezeigt werden.

So sieht der relevante Code aus:

```js
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
```

Wenn das [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, wenn ein oder mehrere Elemente mit dem Beobachter geschnitten (d.h. im Viewport angezeigt) werden. Wir können jeden Fall durchlaufen und entsprechend reagieren – wenn ein Bild sichtbar ist, laden wir das korrekte Bild und hören auf, es zu beobachten, da wir es nicht mehr überwachen müssen.

Lassen Sie uns unser früheres Zitat zur progressiven Verbesserung wiederholen – der Code ist so geschrieben, dass die App funktioniert, egal ob Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder einfach mit dem zuvor beschriebenen grundlegenden Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel untersucht nur einen der Ansätze. Sie könnten versuchen, Ihre Apps robuster zu machen, indem Sie sie ohne JavaScript arbeiten lassen – entweder mit {{htmlelement("noscript")}}, um das Bild mit bereits zugewiesenem endgültigem `src` anzuzeigen, oder indem Sie `<img>`-Tags mit {{htmlelement("a")}}-Elementen umwickeln, die auf die Zielbilder verweisen, damit der Benutzer sie bei Bedarf anklicken und aufrufen kann.

Das werden wir nicht tun, weil die App selbst von JavaScript abhängig ist – ohne JavaScript würde die Liste der Spiele nicht einmal geladen werden und der Service Worker-Code würde nicht ausgeführt.

Wir könnten den Ladeprozess so umschreiben, dass nicht nur die Bilder, sondern vollständige Artikel mit vollständigen Beschreibungen und Links geladen werden. Dies würde wie ein unendliches Scrollen funktionieren – die Elemente auf der Liste würden erst geladen, wenn der Benutzer die Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer und wir würden noch größere Leistungsverbesserungen erzielen.

## Fazit

Weniger zunächst zu ladende Dateien, kleinere in Module aufgeteilte Dateien, die Verwendung von Platzhaltern und das Laden weiterer Inhalte auf Abruf – dies hilft, schnellere erste Ladezeiten zu erreichen, was Vorteile für den Ersteller der App bringt und dem Benutzer ein reibungsloseres Erlebnis bietet.

Denken Sie an den Ansatz der progressiven Verbesserung – bieten Sie ein nutzbares Produkt, unabhängig vom Gerät oder der Plattform, und bereichern Sie das Erlebnis für diejenigen, die moderne Browser verwenden.

## Abschließende Gedanken

Das war's für diese Tutorial-Serie – wir haben den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgegangen und über die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), [Offline-Verfügbarkeit mit Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) gelernt.

Und in diesem Artikel haben wir das Konzept des progressiven Ladens untersucht, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) verwendet.

Fühlen Sie sich frei, mit dem Code zu experimentieren, Ihre vorhandene App mit PWA-Funktionen zu erweitern oder etwas völlig Neues selbst zu erstellen. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
