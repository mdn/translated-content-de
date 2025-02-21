---
title: PWAs installierbar machen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Ein entscheidendes Merkmal einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät beworben werden kann. Einmal installiert, erscheint eine PWA für Nutzer wie eine plattform-spezifische App, ein dauerhaftes Merkmal ihres Geräts, das sie direkt vom Betriebssystem aus starten können, wie jede andere App.

Wir können dies wie folgt zusammenfassen:

- Unterstützende Browser bewerben die PWA zur Installation beim Benutzer.
- Die PWA kann wie eine plattform-spezifische App installiert werden und kann den Installationsprozess anpassen.
- Einmal installiert, erhält die PWA neben plattform-spezifischen Apps ein App-Symbol auf dem Gerät.
- Einmal installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jedes dieser Merkmale in diesem Leitfaden besprechen. Zuerst werden wir jedoch die Anforderungen diskutieren, die eine Web-App erfüllen muss, damit sie zur Installation beworben werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation beworben werden kann, muss sie einige technische Anforderungen erfüllen. Wir können diese als die Mindestanforderungen betrachten, die eine Web-App erfüllen muss, um eine PWA zu sein.

> [!NOTE]
> Obwohl es keine Anforderung für eine PWA ist, installierbar zu sein, nutzen viele PWAs [Service Workers](/de/docs/Web/API/Service_Worker_API), um ein Offline-Erlebnis zu bieten.
> Siehe die [CycleTracker: Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)-Tutorial für weitere Informationen.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

Das Manifest wird mit einem {{HTMLElement("link")}}-Element in das HTML der App eingebunden:

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="manifest" href="manifest.json" />
    <!-- ... -->
  </head>
  <body></body>
</html>
```

Wenn die PWA mehr als eine Seite hat, muss jede Seite auf diese Weise auf das Manifest verweisen.

Das Manifest enthält ein einzelnes JSON-Objekt mit einer Sammlung von Elementen, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein ziemlich minimales Manifest, das nur zwei Elemente enthält: `"name"` und `"icons"`.

```json
{
  "name": "My PWA",
  "icons": [
    {
      "src": "icons/512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

#### Erforderliche Elemente im Manifest

Chromium-basierte Browser, darunter Google Chrome, Samsung Internet und Microsoft Edge, verlangen, dass das Manifest die folgenden Elemente enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein 192px- und ein 512px-Symbol enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden

Für eine vollständige Beschreibung jedes Elements siehe die Referenzdokumentation zum [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest).

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung unter Verwendung von `localhost` oder `127.0.0.1` — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts), der Ressourcen betrachtet, die von `file://`-URLs geladen werden, als sicher.

## Installation aus einem App Store

Nutzer erwarten, Apps im App Store ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App Stores verteilen. Der Prozess ist für jeden App Store spezifisch:

- [Anleitung zum Veröffentlichen einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zum Veröffentlichen einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zum Veröffentlichen einer PWA im Meta Quest Store](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Werkzeug, das den Prozess der Verpackung und Veröffentlichung einer PWA für verschiedene App Stores vereinfacht. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und den iOS App Store.

Wenn Sie Ihre App zum App Store hinzugefügt haben, können Nutzer sie von dort aus installieren, genau wie eine plattform-spezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird die App dem Nutzer zur Installation angeboten. Der Nutzer hat die Möglichkeit, die App zu installieren. Das bedeutet, dass Sie Ihre PWA als Website verteilen können, wodurch sie über die Web-Suche auffindbar ist, und sie auch in App Stores verteilen, damit Nutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung bei PWAs funktioniert: Wenn ein Nutzer Ihre PWA im Web mit einem Browser besucht, der sie nicht installieren kann, kann er sie genauso wie eine normale Website nutzen.

Die UI für die Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen. Ein Browser kann zum Beispiel ein "Installieren"-Symbol in der URL-Leiste enthalten, wenn der Nutzer zu der Seite navigiert:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Nutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, in der gefragt wird, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol der PWA, die aus den Manifest-Elementen [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) stammen.

### Browser-Unterstützung

Die Unterstützung für die Installation von PWAs aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifestdatei haben, auf allen unterstützten Desktop-Betriebssystemen.
- Firefox und Safari unterstützen die Installation von PWAs mit einer Manifestdatei nicht.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und der Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs über das Teilen-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für den Desktop und Android, Safari für den Desktop und Edge für den Desktop unterstützen auch die Installation von jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat und ohne Rücksicht auf die Installierbarkeitskriterien der Manifestdatei.
Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Seite aktiv zur Installation bewirbt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Das Installationsfenster auslösen

Eine PWA kann ihre eigene In-Page-UI bereitstellen, damit der Nutzer das Installationsfenster öffnen kann, anstatt sich auf die von dem Browser standardmäßig bereitgestellte Benutzeroberfläche zu verlassen. Dadurch kann eine PWA Kontext und einen Grund für den Nutzer bereitstellen, die PWA zu installieren, und der Installationsprozess kann leichter entdeckt werden.

Diese Technik basiert auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die das Installationsfenster zeigt. So kann eine PWA:

- einen eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis lauschen
- das Standardverhalten des Ereignisses durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) unterbrechen
- in der Ereignisbehandlungsroutine für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Das Installationsfenster anpassen

Standardmäßig enthält das Installationsfenster den Namen und das Symbol der PWA. Wenn Sie Werte für die Manifest-Elemente [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) bereitstellen, werden diese Werte nur unter Android im Installationsfenster angezeigt, was dem Nutzer zusätzlichen Kontext und Motivation gibt, die PWA zu installieren.

Das folgende Screenshot zeigt, wie das Installationsfenster für die [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome unter Android aussieht:

![Installationsfenster für PWAmp auf Android](pwamp-install-prompt-android.png)

## Die App starten

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät zusammen mit allen anderen Apps angezeigt, die der Nutzer installiert hat, und das Anklicken des Symbols startet die App.

Sie können das Manifest-Element [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) verwenden, um den _Anzeige-Modus_ zu steuern: Also, wie die PWA erscheint, wenn sie gestartet wird. Insbesondere:

- `"standalone"` bedeutet, dass die PWA wie eine plattform-spezifische Anwendung aussehen und sich anfühlen soll, ohne Elemente der Browser-Benutzeroberfläche
- `"browser"` bedeutet, dass die PWA wie eine normale Website als neuer Browser-Tab oder -Fenster geöffnet werden soll.

Wenn der Browser einen bestimmten Anzeige-Modus nicht unterstützt, fällt `display` in einen unterstützten Anzeige-Modus gemäß einer vordefinierten Sequenz zurück. Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es Ihnen, die Rückfallsequenz neu zu definieren.
