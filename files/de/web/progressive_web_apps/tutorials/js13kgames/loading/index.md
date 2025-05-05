---
title: "js13kGames: Progressives Laden"
short-title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Beispiel zu einer Progressive Web App zu machen, indem wir [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifeste](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) verwenden. In diesem Artikel gehen wir weiter und verbessern die Leistung der App, indem wir ihre Ressourcen progressiv laden.

## Erster sinnvoller Anstrich

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Sinnvolles zu liefern – je länger sie warten müssen, bis die Seite geladen ist, desto größer ist die Chance, dass sie die Seite verlassen, bevor alles fertig geladen ist. Wir sollten in der Lage sein, ihnen zumindest die Grundansicht der Seite zu zeigen, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen mehr Inhalt geladen wird.

Dies könnte durch progressives Laden – auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading) – erreicht werden. Es geht darum, das Laden so vieler Ressourcen wie möglich (HTML, CSS, JavaScript) zu verzögern und nur diejenigen sofort zu laden, die für die erste Erfahrung wirklich benötigt werden.

## Bündeln versus Aufteilen

Viele Besucher werden nicht jede einzelne Seite einer Website durchlaufen, dennoch ist der übliche Ansatz, alle Funktionen, die wir haben, in einer großen Datei zu bündeln. Eine `bundle.js` Datei kann viele Megabyte umfassen, und ein einziges `style.css` Bündel kann alles enthalten, von den grundlegenden CSS-Strukturdefinitionen bis hin zu allen möglichen Stilen jeder Version der Seite: mobil, Tablet, Desktop, nur Druck usw.

Es ist schneller, all diese Informationen als eine Datei zu laden, anstatt viele kleine, aber wenn der Benutzer nicht alles am Anfang benötigt, könnten wir nur das Laden, was entscheidend ist, und dann andere Ressourcen verwalten, wenn sie benötigt werden.

## Renderblockierende Ressourcen

Bündeln ist ein Problem, weil der Browser das HTML, CSS und JavaScript laden muss, bevor er ihre gerenderten Ergebnisse auf dem Bildschirm darstellen kann. Während der wenigen Sekunden zwischen dem erstmaligen Zugriff auf die Website und dem Abschluss des Ladens sieht der Benutzer eine leere Seite, was eine schlechte Erfahrung ist.

Um das zu beheben, können wir zum Beispiel `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und ausgeführt _nachdem_ das Dokument selbst geparst wurde, sodass es das Rendern der HTML-Struktur nicht blockiert.

Eine weitere Technik ist das Laden von JavaScript-Modulen mit [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import) nur bei Bedarf.

Zum Beispiel, wenn eine Website einen Suchknopf hat, können wir das JavaScript für die Suchfunktion laden, nachdem der Benutzer auf den Suchknopf geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Benutzer auf den Knopf klickt, wird der asynchrone Klick-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()` Funktion auf, die aus diesem Modul exportiert wird. Das `search.js` Modul wird daher nur heruntergeladen, geparst und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen zu ihnen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies wird dem Browser mitteilen, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA Demo-Anwendung ist das CSS einfach genug, um es alles in einer einzigen Datei ohne spezifische Regeln zu belassen, wie sie geladen werden soll. Wir könnten sogar noch weiter gehen und alles von `style.css` in das `<style>` Tag im `<head>` von `index.html` verschieben – dies würde die Leistung sogar noch mehr verbessern, aber zur Lesbarkeit des Beispiels werden wir diesen Ansatz ebenfalls überspringen.

## Bilder

Neben JavaScript und CSS enthalten Websites wahrscheinlich eine Reihe von Bildern. Wenn Sie {{htmlelement("img")}} Elemente in Ihr HTML aufnehmen, wird jedes referenzierte Bild beim ersten Zugriff auf die Website abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, vorzugeben, dass das Herunterladen von Bilddaten in Megabyte nötig ist, bevor die Seite bereit ist, aber dies erzeugt wieder eine schlechte Wahrnehmung der Leistung. Wir brauchen nicht alle Bilder in der bestmöglichen Qualität ganz am Anfang des Seitenaufrufs.

Das kann optimiert werden. Erstens sollten Sie Tools oder Dienste wie [TinyPNG](https://tinypng.com/) verwenden, um die Dateigröße Ihrer Bilder zu reduzieren, ohne die Qualität zu sehr zu verändern. Wenn Sie diesen Punkt überschritten haben, können Sie über die Optimierung des Bildladens mithilfe von JavaScript nachdenken. Wir werden dies unten erklären.

### Platzhalterbild

Anstatt alle Screenshots der Spiele im `src` Attribut der `<img>` Elemente zu referenzieren, was den Browser dazu zwingt, sie automatisch herunterzuladen, können wir es selektiv über JavaScript tun. Die js13kPWA App verwendet stattdessen ein Platzhalterbild, das klein und leicht ist, während die endgültigen Pfade zu Zielbildern in `data-src` Attributen gespeichert werden:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden über JavaScript _nachdem_ die Seite mit dem Aufbau der HTML-Struktur fertig ist geladen. Das Platzhalterbild wird auf die gleiche Weise skaliert wie die Originalbilder, sodass es denselben Platz einnimmt und das Layout beim Laden der Bilder nicht neu gezeichnet wird.

### Laden über JavaScript

Die Datei `app.js` verarbeitet die `data-src` Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die Variable `imagesToLoad` enthält Referenzen auf alle Bilder, während die Funktion `loadImages` den Pfad von `data-src` nach `src` verschiebt. Wenn jedes Bild tatsächlich geladen ist, entfernen wir sein `data-src` Attribut, da es nicht mehr benötigt wird. Dann iterieren wir durch jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Unschärfe in CSS

Um den gesamten Prozess optisch ansprechender zu gestalten, wird der Platzhalter in CSS unscharf gemacht.

![Screenshot von Platzhalterbildern in der js13kPWA App.](js13kpwa-placeholders.png)

Wir rendern die Bilder am Anfang mit einer Unschärfe, sodass ein Übergang zu dem scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dies wird den Unschärfeeffekt innerhalb von einer halben Sekunde entfernen, was für den "Lade"-Effekt gut genug aussieht.

## Laden auf Anfrage

Der in dem obigen Abschnitt diskutierte Bildlade-Mechanismus funktioniert gut – er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet dabei einen schönen Übergangseffekt an. Das Problem ist, dass er immer noch _alle_ Bilder auf einmal lädt, obwohl der Benutzer nur die ersten zwei oder drei beim Laden der Seite sieht.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Dies wird _Lazy Loading_ genannt. [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) ist eine Technik, um Bilder nur zu laden, wenn sie im Ansichtsfenster angezeigt werden. Es gibt mehrere Möglichkeiten, dem Browser das Lazy Loading von Bildern mitzuteilen.

### Das `loading` Attribut auf \<img>

Die einfachste Methode, dem Browser mitzuteilen, dass er lazy laden soll, erfordert kein JavaScript. Sie fügen dem {{HTMLElement("img")}} Element mit dem Wert `lazy` das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut hinzu, und der Browser wird wissen, dass dieses Bild nur bei Bedarf geladen werden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung für das zuvor funktionierende Beispiel — [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) wird Zielbilder erst laden, wenn der Benutzer nach unten scrollt, sodass sie im Ansichtsfenster angezeigt werden.

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

Wenn das [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Objekt unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, wenn ein oder mehrere Elemente mit dem Observer in Verbindung stehen (d.h. im Ansichtsfenster erscheinen). Wir können jeden Fall iterieren und entsprechend reagieren – wenn ein Bild sichtbar ist, laden wir das richtige Bild und hören auf, es zu beobachten, da wir es nicht länger beobachten müssen.

Lassen Sie uns noch einmal auf unsere frühere Erwähnung der progressiven Verbesserung zurückkommen – der Code ist so geschrieben, dass die App funktioniert, unabhängig davon, ob Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder nur mit dem grundlegenderen Ansatz, den wir zuvor behandelt haben.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel untersucht nur einen der Ansätze. Sie könnten versuchen, Ihre Apps robuster zu gestalten, indem Sie sie ohne JavaScript funktionieren lassen — entweder indem Sie {{htmlelement("noscript")}} verwenden, um das Bild bereits mit dem endgültigen `src` zu zeigen, oder indem Sie die `<img>` Tags mit {{htmlelement("a")}} Elementen umwickeln, die auf die Zielbilder verweisen, sodass der Benutzer sie bei Bedarf anklicken und aufrufen kann.

Das werden wir nicht tun, weil die App selbst von JavaScript abhängig ist – ohne dies würde die Liste der Spiele nicht einmal geladen und der Service Worker Code nicht ausgeführt.

Wir könnten den Ladeprozess umschreiben, um nicht nur die Bilder, sondern die vollständigen Elemente mit vollständigen Beschreibungen und Links zu laden. Dies würde wie ein unendlicher Scroll funktionieren – die Elemente auf der Liste werden nur geladen, wenn der Benutzer die Seite nach unten scrollt. Auf diese Weise wäre die initiale HTML-Struktur minimal, die Ladezeit noch kürzer und wir hätten noch größere Leistungsverbesserungen.

## Fazit

Weniger Dateien, die zunächst geladen werden müssen, kleinere Dateien, die in Module aufgeteilt sind, Verwendung von Platzhaltern und das Laden zusätzlicher Inhalte auf Anfrage – dies hilft, schnellere Anfangsladezeiten zu erreichen, was Vorteile für den App-Ersteller bringt und eine reibungslosere Erfahrung für den Benutzer bietet.

Denken Sie an den Ansatz der progressiven Verbesserung – bieten Sie ein nutzbares Produkt unabhängig von Gerät oder Plattform an, aber stellen Sie sicher, dass die Erfahrung für diejenigen bereichert wird, die moderne Browser nutzen.

## Abschließende Gedanken

Das war alles für diese Tutorial-Serie – wir sind den [Quellcode der js13kPWA Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgegangen und haben etwas über die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), [Offline-Verfügbarkeit mit Service Workern](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) gelernt.

Und in diesem Artikel haben wir das Konzept des progressiven Ladens untersucht, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) verwendet.

Fühlen Sie sich frei, mit dem Code zu experimentieren, Ihre bestehende App mit PWA-Funktionen zu verbessern oder ganz etwas Neues selbst zu erstellen. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
