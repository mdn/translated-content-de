---
title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den vorherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/)-Beispiel zu einer Progressive Web App zu machen: [Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifests](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel gehen wir weiter und verbessern die Leistung der App, indem wir ihre Ressourcen progressiv laden.

## Erster bedeutungsvoller Anstrich

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Bedeutungsvolles zu liefern – je länger er auf das Laden der Seite warten muss, desto größer ist die Chance, dass er nicht wartet, bis alles fertig ist. Wir sollten in der Lage sein, ihnen zumindest die Grundansicht der Seite zu zeigen, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen mehr Inhalt später geladen wird.

Dies kann durch progressives Laden erreicht werden – auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading). Es geht darum, das Laden so vieler Ressourcen wie möglich (HTML, CSS, JavaScript) aufzuschieben und nur diejenigen sofort zu laden, die wirklich für das erste Erlebnis benötigt werden.

## Bundling versus Aufteilen

Viele Besucher werden nicht jede einzelne Seite einer Website durchsehen, dennoch ist der übliche Ansatz, alle Funktionen, die wir haben, in eine große Datei zu bündeln. Eine `bundle.js`-Datei kann viele Megabyte groß sein, und ein einzelnes `style.css`-Bundle kann alles enthalten, vom Basis-CSS-Strukturdefinitionen bis hin zu allen möglichen Stilrichtungen jeder Version der Seite: Mobil, Tablet, Desktop, nur für den Druck usw.

Es ist schneller, all diese Informationen als eine Datei statt vieler kleiner zu laden, aber wenn der Nutzer nicht alles zu Beginn benötigt, könnten wir nur das Wesentliche laden und andere Ressourcen bei Bedarf verwalten.

## Renderblockierende Ressourcen

Bundling ist ein Problem, weil der Browser das HTML, CSS und JavaScript laden muss, bevor er die gerenderten Ergebnisse auf den Bildschirm zeichnen kann. Während der wenigen Sekunden zwischen dem erstmaligen Zugriff auf die Website und dem vollständigen Laden sieht der Nutzer eine leere Seite, was ein schlechtes Erlebnis ist.

Um das zu beheben, können wir zum Beispiel `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Diese werden heruntergeladen und ausgeführt, _nachdem_ das Dokument selbst analysiert wurde, sodass es das Rendern der HTML-Struktur nicht blockiert.

Eine andere Technik ist das Laden von JavaScript-Modulen mittels [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import), nur wenn sie benötigt werden.

Zum Beispiel, wenn eine Website einen Suchbutton hat, können wir das JavaScript für die Suchfunktion laden, nachdem der Nutzer auf den Suchbutton klickt:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Nutzer auf den Button klickt, wird der asynchrone Click-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()`-Funktion auf, die von diesem Modul exportiert wird. Das `search.js`-Modul wird daher nur heruntergeladen, analysiert und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen zu ihnen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dies wird dem Browser mitteilen, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um es in einer einzigen Datei mit keinen spezifischen Regeln über deren Ladeweise zu belassen. Wir könnten noch weiter gehen und alles von `style.css` in das `<style>`-Tag im `<head>` von `index.html` verschieben – dies würde die Leistung noch weiter verbessern, aber um die Lesbarkeit des Beispiels beizubehalten, lassen wir diesen Ansatz ebenfalls weg.

## Bilder

Neben JavaScript und CSS werden Websites wahrscheinlich eine Anzahl von Bildern enthalten. Wenn Sie {{htmlelement("img")}}-Elemente in Ihrem HTML einfügen, dann wird jedes referenzierte Bild während des erstmaligen Zugriffs auf die Website abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, Megabytes an Bilddaten herunterladen zu müssen, bevor die Seite angezeigt wird, aber dies sorgt wiederum für einen schlechten Eindruck der Leistung. Wir benötigen nicht alle Bilder in der bestmöglichen Qualität zu Beginn der Betrachtung der Seite.

Dies kann optimiert werden. Zunächst sollten Sie Werkzeuge oder Dienste verwenden, die ähnlichen [TinyPNG](https://tinypng.com/) sind und die Dateigröße Ihrer Bilder reduzieren, ohne die Qualität zu sehr zu beeinträchtigen. Wenn Sie diesen Punkt überschritten haben, können Sie darüber nachdenken, das Laden der Bilder mit JavaScript zu optimieren. Wir werden dies unten erklären.

### Platzhalterbild

Anstatt alle Screenshots der Spiele in den `src`-Attributen der `<img>`-Elemente zu referenzieren (was den Browser zwingt, sie automatisch herunterzuladen), können wir dies selektiv über JavaScript tun. Die js13kPWA-App verwendet stattdessen ein Platzhalterbild, das klein und leicht ist, während die endgültigen Pfade zu den Zielbildern in `data-src`-Attributen gespeichert sind:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden über JavaScript _nachdem_ die Website die HTML-Struktur aufgebaut hat geladen. Das Platzhalterbild wird auf die gleiche Weise skaliert wie die Originalbilder, sodass es denselben Platz beansprucht und nicht das Layout neu malt, während die Bilder geladen werden.

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

Die Variable `imagesToLoad` enthält Referenzen zu allen Bildern, während die Funktion `loadImages` den Pfad von `data-src` zu `src` verschiebt. Wenn jedes Bild tatsächlich geladen ist, entfernen wir sein `data-src`-Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Unschärfe in CSS

Um den gesamten Prozess optisch ansprechender zu gestalten, wird der Platzhalter in CSS unscharf dargestellt.

![Screenshot der Platzhalterbilder in der js13kPWA-App.](js13kpwa-placeholders.png)

Wir rendern die Bilder von Anfang an mit einer Unschärfe, sodass ein Übergang zum scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dies entfernt den Unschärfeeffekt innerhalb einer halben Sekunde, was für den "Lade"-Effekt gut genug aussieht.

## Laden auf Abruf

Der oben besprochene Bildlademechanismus funktioniert gut – er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet einen schönen Übergangseffekt im Prozess an. Das Problem ist, dass er trotzdem _alle_ Bilder auf einmal lädt, obwohl der Nutzer nur die ersten zwei oder drei beim Seitenladen sehen wird.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Dies wird als _Lazy Loading_ bezeichnet. [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Ansichtsfenster erscheinen. Es gibt mehrere Möglichkeiten, dem Browser mitzuteilen, Bilder faul zu laden.

### Das Ladeattribut auf \<img>

Die einfachste Methode, dem Browser zu sagen, dass er faul laden soll, erfordert kein JavaScript. Sie fügen das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut zu einem {{HTMLElement("img")}}-Element mit dem Wert `lazy` hinzu, und der Browser weiß, dass er dieses Bild nur bei Bedarf laden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung des zuvor funktionierenden Beispiels – der [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) lädt Zielbilder nur dann, wenn der Nutzer nach unten scrollt und sie im Ansichtsfenster sichtbar werden.

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

Wenn das Objekt [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, wenn ein oder mehrere Elemente mit dem Beobachter überschneiden (d.h. im Ansichtsfenster erscheinen). Wir können über jeden Fall iterieren und entsprechend reagieren – wenn ein Bild sichtbar ist, laden wir das richtige Bild und hören auf, es zu beobachten, da wir es nicht länger beobachten müssen.

Erinnern wir uns an unsere frühere Erwähnung der progressiven Verbesserung – der Code ist so geschrieben, dass die App funktioniert, egal ob der Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder einfach mit dem zuvor beschriebenen grundlegenderen Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel beschreibt nur einen der Ansätze. Sie könnten versuchen, Ihre Apps stärker abzusichern, indem Sie sie ohne JavaScript funktionsfähig machen – entweder indem Sie {{htmlelement("noscript")}} verwenden, um das Bild mit bereits zugewiesenem endgültigen `src` anzuzeigen, oder indem Sie `<img>`-Tags mit {{htmlelement("a")}}-Elementen umgeben, die auf die Zielbilder verweisen, sodass der Nutzer darauf klicken und sie bei Bedarf abrufen kann.

Das werden wir nicht tun, weil die App selbst von JavaScript abhängt – ohne es würde die Liste der Spiele nicht einmal geladen und der Service Worker-Code nicht ausgeführt.

Wir könnten den Ladevorgang umschreiben, um nicht nur die Bilder, sondern die kompletten Elemente mit vollständigen Beschreibungen und Links zu laden. Es würde wie ein unendliches Scrollen funktionieren – die Elemente auf der Liste würden nur geladen, wenn der Nutzer die Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer und wir hätten noch größere Leistungsgewinne.

## Schlussfolgerung

Weniger Dateien, die anfänglich geladen werden müssen, kleinere in Module aufgeteilte Dateien, Verwendung von Platzhaltern und mehr Inhalte auf Abruf laden – dies wird helfen, schnellere anfängliche Ladezeiten zu erreichen, was Vorteile für den App-Ersteller bietet und dem Nutzer ein reibungsloseres Erlebnis bietet.

Denken Sie an den Ansatz der progressiven Verbesserung – bieten Sie ein nutzbares Produkt unabhängig vom Gerät oder der Plattform, bereichern Sie jedoch die Erfahrung für diejenigen, die moderne Browser verwenden.

## Letzte Gedanken

Das war alles für diese Tutorial-Serie – wir haben den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgearbeitet und über die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), die [Offline-Verfügbarkeit mit Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) gelernt.

Und in diesem Artikel haben wir uns mit dem Konzept des progressiven Ladens beschäftigt, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) nutzt.

Fühlen Sie sich frei, mit dem Code zu experimentieren, Ihre bestehende App mit PWA-Funktionen zu verbessern oder etwas ganz Neues auf eigene Faust zu entwickeln. PWAs bieten einen großen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
