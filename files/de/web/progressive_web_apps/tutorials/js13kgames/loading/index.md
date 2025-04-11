---
title: Progressives Laden
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In den bisherigen Schritten dieses Tutorials haben wir APIs behandelt, die uns helfen, unser [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Beispiel zu einer Progressive Web App zu machen: [Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [Web Manifests](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs), [Benachrichtigungen und Push](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push). In diesem Artikel gehen wir noch weiter und verbessern die Leistung der App, indem wir ihre Ressourcen progressiv laden.

## Erster sinnvoller Anstrich

Es ist wichtig, dem Benutzer so schnell wie möglich etwas Bedeutungsvolles zu liefern — je länger sie darauf warten, dass die Seite lädt, desto größer ist die Chance, dass sie gehen, bevor alles fertig geladen ist. Wir sollten ihnen zumindest die Grundansicht der Seite zeigen können, die sie sehen möchten, mit Platzhaltern an den Stellen, an denen später mehr Inhalt geladen wird.

Dies kann durch progressives Laden erreicht werden — auch bekannt als [Lazy Loading](https://en.wikipedia.org/wiki/Lazy_loading). Dabei geht es darum, das Laden von so vielen Ressourcen wie möglich (HTML, CSS, JavaScript) zu verschieben und nur die Ressourcen sofort zu laden, die für das erste Erlebnis wirklich notwendig sind.

## Bündelung versus Aufteilung

Viele Besucher werden nicht jede einzelne Seite einer Website durchgehen, dennoch besteht der übliche Ansatz darin, jede Funktion, die wir haben, in eine große Datei zu bündeln. Eine `bundle.js`-Datei kann viele Megabyte groß sein und ein einziges `style.css`-Bündel kann alles von grundlegenden CSS-Strukturdefinitionen bis zu allen möglichen Stilen jeder Version der Site enthalten: mobil, Tablet, Desktop, nur drucken usw.

Es ist schneller, all diese Informationen als eine Datei zu laden, anstatt viele kleine, aber wenn der Benutzer nicht alles von Anfang an benötigt, könnten wir nur das laden, was wesentlich ist, und andere Ressourcen bei Bedarf verwalten.

## Render-blockierende Ressourcen

Bündelung ist ein Problem, weil der Browser das HTML, CSS und JavaScript laden muss, bevor er ihre gerenderten Ergebnisse auf dem Bildschirm darstellen kann. Während der wenigen Sekunden zwischen dem anfänglichen Website-Zugriff und dem Abschluss des Ladens sieht der Benutzer eine leere Seite, was ein schlechtes Erlebnis ist.

Um dies zu beheben, können wir zum Beispiel `defer` zu JavaScript-Dateien hinzufügen:

```html
<script src="app.js" defer></script>
```

Sie werden heruntergeladen und _nachdem_ das Dokument selbst analysiert wurde ausgeführt, sodass sie das Rendern der HTML-Struktur nicht blockieren.

Eine weitere Technik ist das Laden von JavaScript-Modulen mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) nur bei Bedarf.

Zum Beispiel, wenn eine Website einen Suchbutton hat, können wir das JavaScript für die Suchfunktion laden, nachdem der Benutzer auf den Suchbutton geklickt hat:

```js
document.getElementById("open-search").addEventListener("click", async () => {
  const searchModule = await import("/modules/search.js");
  searchModule.loadAutoComplete();
});
```

Sobald der Benutzer auf die Schaltfläche klickt, wird der asynchrone Klick-Handler aufgerufen. Die Funktion wartet, bis das Modul geladen ist, und ruft dann die `loadAutoComplete()`-Funktion auf, die von diesem Modul exportiert wird. Das `search.js`-Modul wird daher nur heruntergeladen, analysiert und ausgeführt, wenn die Interaktion stattfindet.

Wir können auch CSS-Dateien aufteilen und Medientypen hinzufügen:

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

Dadurch wird der Browser angewiesen, sie nur zu laden, wenn die Bedingung erfüllt ist.

In unserer js13kPWA-Demo-App ist das CSS einfach genug, um alles in einer einzigen Datei ohne spezielle Regeln zu belassen, wann sie geladen werden sollen. Wir könnten sogar noch weiter gehen und alles von `style.css` in das `<style>`-Tag im `<head>` von `index.html` verschieben — das würde die Leistung noch weiter verbessern, aber um die Lesbarkeit des Beispiels zu erhöhen, werden wir diesen Ansatz überspringen.

## Bilder

Neben JavaScript und CSS werden Websites wahrscheinlich eine Reihe von Bildern enthalten. Wenn Sie {{htmlelement("img")}} Elemente in Ihrem HTML einfügen, wird jedes referenzierte Bild beim ersten Zugriff auf die Website abgerufen und heruntergeladen. Es ist nicht ungewöhnlich, dass Megabytes an Bilddaten heruntergeladen werden müssen, bevor die Seite als bereit angezeigt wird, aber dies schafft erneut eine schlechte Wahrnehmung der Leistung. Wir brauchen nicht alle Bilder in bester möglicher Qualität gleich zu Beginn des Betrachtens der Seite.

Dies kann optimiert werden. Zuallererst sollten Sie Werkzeuge oder Dienste wie [TinyPNG](https://tinypng.com/) verwenden, die die Dateigröße Ihrer Bilder reduzieren, ohne die Qualität zu stark zu verändern. Wenn Sie diesen Punkt überschritten haben, können Sie darüber nachdenken, das Laden der Bilder mit JavaScript zu optimieren. Dies werden wir im Folgenden erklären.

### Platzhalterbild

Anstatt alle Screenshots von Spielen in `<img>`-Element-`src`-Attributen zu referenzieren, was den Browser dazu zwingen würde, sie automatisch herunterzuladen, können wir dies selektiv über JavaScript tun. Die js13kPWA-App verwendet stattdessen ein Platzhalterbild, das klein und leicht ist, während die endgültigen Pfade zu Zielbildern in `data-src`-Attributen gespeichert sind:

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

Diese Bilder werden über JavaScript _nachdem_ die Seite die HTML-Struktur fertiggestellt hat, geladen. Das Platzhalterbild wird genauso skaliert wie die Originalbilder, sodass es denselben Platz einnimmt und beim Laden der Bilder keinen Neuanstrich des Layouts verursacht.

### Laden über JavaScript

Die `app.js`-Datei verarbeitet die `data-src`-Attribute wie folgt:

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

Die `imagesToLoad`-Variable enthält Referenzen zu allen Bildern, während die `loadImages`-Funktion den Pfad von `data-src` zu `src` verschiebt. Wenn jedes Bild tatsächlich geladen ist, entfernen wir sein `data-src`-Attribut, da es nicht mehr benötigt wird. Dann durchlaufen wir jedes Bild und laden es:

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### Verschwommen in CSS

Um den gesamten Prozess visuell ansprechender zu gestalten, wird der Platzhalter in CSS verschwommen dargestellt.

![Screenshot der Platzhalterbilder in der js13kPWA-App.](js13kpwa-placeholders.png)

Wir rendern die Bilder am Anfang mit einem Unschärfe-Effekt, sodass ein Übergang zum scharfen Bild erreicht werden kann:

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

Dieser entfernt den Unschärfe-Effekt innerhalb einer halben Sekunde, was gut genug für den "Ladeeffekt" aussieht.

## Laden auf Abruf

Der im obigen Abschnitt besprochene Bildlade-Mechanismus funktioniert gut — er lädt die Bilder nach dem Rendern der HTML-Struktur und wendet in diesem Prozess einen schönen Übergangseffekt an. Das Problem ist, dass er immer noch _alle_ Bilder auf einmal lädt, obwohl der Benutzer beim Laden der Seite nur die ersten zwei oder drei sieht.

Dieses Problem kann gelöst werden, indem die Bilder nur bei Bedarf geladen werden: Dies wird als _Lazy Loading_ bezeichnet. [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) ist eine Technik, um Bilder nur dann zu laden, wenn sie im Viewport erscheinen. Es gibt mehrere Möglichkeiten, dem Browser mitzuteilen, dass Bilder Lazy Loaded werden sollen.

### Das loading-Attribut auf \<img>

Die einfachste Möglichkeit, dem Browser zu sagen, er solle Lazy Loaded durchführen, erfordert kein JavaScript. Sie fügen das [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut einem {{HTMLElement("img")}}-Element mit dem Wert `lazy` hinzu, und der Browser weiß, dass dieses Bild nur bei Bedarf geladen werden soll.

```html
<img
  src="data/img/placeholder.png"
  data-src="data/img/SLUG.jpg"
  alt="NAME"
  loading="lazy" />
```

### Intersection Observer

Dies ist eine progressive Verbesserung zum zuvor funktionierenden Beispiel — [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) lädt Zielbilder nur, wenn der Benutzer nach unten scrollt, wodurch sie im Viewport angezeigt werden.

Hier ist, wie der relevante Code aussieht:

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

Wenn das [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt unterstützt wird, erstellt die App eine neue Instanz davon. Die als Parameter übergebene Funktion behandelt den Fall, in dem ein oder mehrere Elemente mit dem Observer geschnitten werden (d.h. im Viewport erscheinen). Wir können über jeden Fall iterieren und entsprechend reagieren — wenn ein Bild sichtbar ist, laden wir das richtige Bild und hören auf, es zu beobachten, da wir es nicht mehr beobachten müssen.

Lassen Sie uns unsere frühere Erwähnung von progressiver Verbesserung wiederholen — der Code ist so geschrieben, dass die App funktioniert, unabhängig davon, ob Intersection Observer unterstützt wird oder nicht. Wenn nicht, laden wir die Bilder einfach mit dem zuvor behandelten einfacheren Ansatz.

## Verbesserungen

Denken Sie daran, dass es viele Möglichkeiten gibt, Ladezeiten zu optimieren, und dieses Beispiel untersucht nur einen der Ansätze. Sie könnten versuchen, Ihre Apps robuster zu machen, indem Sie sie ohne JavaScript arbeiten lassen — entweder mit {{htmlelement("noscript")}}, um das Bild mit bereits zugewiesenem finalem `src` anzuzeigen, oder indem Sie `<img>`-Tags mit {{htmlelement("a")}}-Elementen einwickeln, die auf die Zielbilder verweisen, sodass der Benutzer sie bei Bedarf anklicken und aufrufen kann.

Wir werden das nicht tun, da die App selbst auf JavaScript angewiesen ist — ohne es würde die Spieleliste nicht einmal geladen, und der Service Worker-Code würde nicht ausgeführt.

Wir könnten den Ladeprozess umschreiben, um nicht nur die Bilder, sondern die kompletten Elemente bestehend aus vollständigen Beschreibungen und Links zu laden. Es würde wie ein unendliches Scrollen funktionieren — die Elemente auf der Liste nur laden, wenn der Benutzer die Seite nach unten scrollt. Auf diese Weise wäre die anfängliche HTML-Struktur minimal, die Ladezeit noch kürzer, und wir würden noch größere Leistungsgewinne erzielen.

## Fazit

Weniger Dateien, die anfänglich geladen werden müssen, kleinere Dateien, die in Module aufgeteilt sind, Verwendung von Platzhaltern und das Laden weiterer Inhalte auf Abruf — dies wird helfen, schnellere anfängliche Ladezeiten zu erzielen, was dem App-Ersteller zugutekommt und dem Benutzer ein reibungsloseres Erlebnis bietet.

Erinnern Sie sich an den Ansatz der progressiven Verbesserung — bieten Sie ein nutzbares Produkt unabhängig vom Gerät oder der Plattform, bereichern Sie jedoch das Erlebnis für diejenigen, die moderne Browser verwenden.

## Abschließende Gedanken

Das war's für diese Tutorialserie — wir sind den [Quellcode der js13kPWA-Beispiel-App](https://github.com/mdn/pwa-examples/tree/main/js13kpwa) durchgegangen und haben die [PWA-Struktur](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/App_structure), [Offline-Verfügbarkeit mit Service Workern](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers), [installierbare PWAs](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs) und schließlich [Benachrichtigungen](/de/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push) kennengelernt.

Und in diesem Artikel haben wir das Konzept des progressiven Ladens beleuchtet, einschließlich eines interessanten Beispiels, das die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) nutzt.

Experimentieren Sie gerne mit dem Code, erweitern Sie Ihre bestehende App mit PWA-Funktionen oder entwickeln Sie ganz alleine etwas Neues. PWAs bieten einen enormen Vorteil gegenüber regulären Web-Apps.

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
