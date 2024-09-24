---
title: Installierbare PWAs erstellen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{PWASidebar}}

Eines der definierenden Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät empfohlen werden kann. Einmal installiert, erscheint eine PWA den Benutzern als plattformspezifische App, ein permanentes Feature ihres Geräts, das direkt vom Betriebssystem aus gestartet werden kann, wie jede andere App auch.

Zusammengefasst lässt sich dies wie folgt beschreiben:

- Unterstützende Browser empfehlen die PWA dem Benutzer zur Installation auf dem Gerät.
- Die PWA kann wie eine plattformspezifische App installiert werden und der Installationsprozess kann angepasst werden.
- Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

In diesem Leitfaden werden wir auf jedes dieser Merkmale eingehen. Zuerst besprechen wir jedoch die Anforderungen, die eine Web-App erfüllen muss, um zur Installation empfohlen zu werden.

## Installationsfähigkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation empfohlen werden kann, muss sie einige technische Anforderungen erfüllen. Diese können wir als die Mindestanforderungen betrachten, damit eine Web-App eine PWA ist.

> [!NOTE]
> Auch wenn es keine Voraussetzung für die Installationsfähigkeit einer PWA ist, nutzen viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät aussehen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und damit sie installierbar ist, muss sie ein Manifest enthalten.

Das Manifest wird mithilfe eines {{HTMLElement("link")}}-Elements in das HTML der App eingebunden:

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

Wenn die PWA mehr als eine Seite hat, muss jede Seite das Manifest auf diese Weise referenzieren.

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Elementen umfasst, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein recht minimales Manifest, das nur zwei Elemente enthält: `"name"` und `"icons"`.

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

#### Erforderliche Manifest-Elemente

Chromium-basierte Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest die folgenden Elemente beinhaltet:

- [`name`](/de/docs/Web/Manifest/name) oder [`short_name`](/de/docs/Web/Manifest/short_name)
- [`icons`](/de/docs/Web/Manifest/icons) müssen ein 192px- und ein 512px-Icon enthalten
- [`start_url`](/de/docs/Web/Manifest/start_url)
- [`display`](/de/docs/Web/Manifest/display) und/oder [`display_override`](/de/docs/Web/Manifest/display_override)
- [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Für eine vollständige Beschreibung jedes Elements siehe die [Web-App-Manifest](/de/docs/Web/Manifest) Referenzdokumentation.

### HTTPS, localhost, oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung mithilfe von `localhost` oder `127.0.0.1` – mit oder ohne Portnummer – bereitgestellt werden.

Dies ist eine strengere Anforderung als [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts), der Ressourcen, die von `file://` URLs geladen werden, als sicher betrachtet.

## Installation aus einem App-Store

Benutzer erwarten, Apps in den App-Stores ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Vorbedingungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores verteilen. Der Prozess ist spezifisch für jeden App-Store:

- [Wie man eine PWA im Google Play Store veröffentlicht](https://chromeos.dev/en/publish/pwa-in-play)
- [Wie man eine PWA im Microsoft Store veröffentlicht](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Wie man eine PWA im Meta Quest Store veröffentlicht](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App-Stores vereinfacht. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App dem App-Store hinzugefügt haben, können Benutzer sie von dort aus installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installationskriterien erfüllt, wird sie dem Benutzer zur Installation empfohlen. Der Benutzer erhält die Möglichkeit, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website verteilen können, die über die Websuche auffindbar ist, und sie auch in App-Stores verteilen können, damit Benutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web auf einem Browser verwendet, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform. Zum Beispiel kann ein Browser ein "Installieren"-Symbol in der URL-Leiste einblenden, wenn der Benutzer die Seite aufruft:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol aktiviert, zeigt der Browser eine Aufforderung an, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol der PWA, die aus den [`name`](/de/docs/Web/Manifest/name) und [`icons`](/de/docs/Web/Manifest/icons) Manifest-Elementen entnommen werden.

### Browser-Unterstützung

Die Unterstützung für die Installation von PWAs aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs mit einer Manifestdatei auf allen unterstützten Desktop-Betriebssystemen.
- Firefox und Safari unterstützen die Installation von PWAs mit einer Manifestdatei nicht.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und höher können PWAs über das Teilen-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch die Installation beliebiger Websites als App, unabhängig davon, ob sie eine Manifestdatei haben und ohne Berücksichtigung der Installationskriterien für die Manifestdatei.
Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Website aktiv zur Installation empfiehlt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Das Installationsmenü auslösen

Eine PWA kann ihre eigene In-Page-Benutzeroberfläche bereitstellen, um den Benutzer zur Öffnung des Installationsmenüs zu bewegen, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht es einer PWA, dem Benutzer einen Kontext und einen Grund zur Installation der PWA zu geben und kann dazu beitragen, den Installationsablauf für den Benutzer leichter auffindbar zu machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die das Installationsmenü anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis lauschen
- das Standardverhalten des Ereignisses durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Das Installationsmenü anpassen

Standardmäßig enthält das Installationsmenü den Namen und das Symbol der PWA. Wenn Sie Werte für die [`description`](/de/docs/Web/Manifest/description) und [`screenshots`](/de/docs/Web/Manifest/screenshots) Manifest-Elemente bereitstellen, werden diese Werte nur auf Android im Installationsmenü angezeigt, was dem Benutzer zusätzlichen Kontext und Motivation zur Installation der PWA bietet.

Das untenstehende Bild zeigt, wie das Installationsmenü für die [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome unter Android aussieht:

![Installationsmenü für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben allen anderen installierten Apps des Benutzers angezeigt, und durch Klicken auf das Symbol wird die App gestartet.

Sie können das [`display`](/de/docs/Web/Manifest/display) Manifest-Element verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA beim Start angezeigt wird. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich anfühlen soll, ohne Browser-Bedienelemente
- `"browser"` gibt an, dass die PWA als neuer Browser-Tab oder -Fenster geöffnet werden soll, genau wie eine normale Website.

Wenn der Browser einen gegebenen Anzeigemodus nicht unterstützt, wird `display` zu einem unterstützten Anzeigemodus gemäß einer vordefinierten Reihenfolge zurückfallen. Das [`display_override`](/de/docs/Web/Manifest/display_override) erlaubt Ihnen, die Reihenfolge des Rückfalls neu zu definieren.
