---
title: Installierbarkeit von PWAs
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

Ein definierendes Merkmal einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät vorgeschlagen werden kann. Sobald installiert, erscheint eine PWA für Benutzer als plattformspezifische App, ein dauerhaftes Merkmal ihres Geräts, welches sie direkt aus dem Betriebssystem heraus starten können, wie jede andere App.

Dies lässt sich wie folgt zusammenfassen:

- Unterstützende Browser bewerben die PWA zur Installation auf dem Gerät.
- Die PWA kann wie eine plattformspezifische App installiert werden und kann den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
- Einmal installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jede dieser Funktionen in diesem Leitfaden besprechen. Zunächst jedoch besprechen wir die Anforderungen, die eine Web-App erfüllen muss, um zur Installation beworben zu werden.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation vorgeschlagen wird, muss sie einige technische Anforderungen erfüllen. Diese können wir als die Mindestanforderungen für eine Web-App betrachten, um eine PWA zu sein.

> [!NOTE]
> Obwohl es keine Anforderung für eine PWA ist, um installierbar zu sein, verwenden viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Sehen Sie die [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Anleitung für weitere Informationen.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App eine PWA sein kann, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

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

Das Manifest enthält ein einziges JSON-Objekt mit einer Sammlung von Mitgliedern, von denen jedes einen Aspekt des Erscheinungsbildes oder des Verhaltens der PWA definiert. Hier ist ein recht minimalistisches Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

#### Erforderliche Manifest-Mitglieder

Chromium-basierte Browser, darunter Google Chrome, Samsung Internet und Microsoft Edge, verlangen, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Manifest/Reference/icons) muss ein 192px- und ein 512px-Icon enthalten
- [`start_url`](/de/docs/Web/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Für eine vollständige Beschreibung jedes Mitglieds siehe die [Web-App-Manifest](/de/docs/Web/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Eine PWA muss über das `https`-Protokoll oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` – mit oder ohne Portnummer – bereitgestellt werden, um installierbar zu sein.

Dies ist eine strengere Anforderung als [secure context](/de/docs/Web/Security/Secure_Contexts), welche Ressourcen, die über `file://` URLs geladen werden, als sicher betrachtet.

## Installation aus einem App-Store

Benutzer erwarten, Apps im App-Store ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores vertreiben. Der Prozess ist spezifisch für jeden App-Store:

- [Wie man eine PWA im Google Play Store veröffentlicht](https://chromeos.dev/en/publish/pwa-in-play)
- [Wie man eine PWA im Microsoft Store veröffentlicht](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Wie man eine PWA im Meta Quest Store veröffentlicht](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess der Verpackung und Veröffentlichung einer PWA für verschiedene App-Stores vereinfacht. Es unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App im App-Store hinzugefügt haben, können Benutzer sie von dort installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird die App dem Benutzer zur Installation vorgeschlagen. Der Benutzer erhält die Möglichkeit, die App zu installieren. Das bedeutet, dass Sie Ihre PWA als Website vertreiben können, die über die Websuche auffindbar ist, und sie auch in App-Stores vertreiben können, damit Benutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung bei PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web mit einem Browser entdeckt, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert je nach Browser und Plattform. Zum Beispiel könnte ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Benutzer zur Seite navigiert:

![Chrome-URL-Leiste mit PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob der Benutzer die PWA installieren möchte, und wenn er akzeptiert, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol der PWA an, die aus den Manifest-Mitgliedern [`name`](/de/docs/Web/Manifest/Reference/name) und [`icons`](/de/docs/Web/Manifest/Reference/icons) stammen.

### Browser-Unterstützung

Die Unterstützung für die Promotion der PWA-Installation aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifestdatei auf allen unterstützten Desktop-Betriebssystemen haben.
- Firefox und Safari unterstützen nicht die Installation von PWAs mit einer Manifestdatei.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs aus dem Freigabemenü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch Benutzer bei der Installation jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat oder nicht und ohne Rücksicht auf die Installierbarkeitskriterien der Manifestdatei.
Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Seite aktiv für die Installation bewirbt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen der Installationsaufforderung

Eine PWA kann ihre eigene Benutzeroberfläche auf der Seite bereitstellen, damit der Benutzer die Installationsaufforderung öffnen kann, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht einer PWA, einen Kontext und einen Grund für den Benutzer bereitzustellen, die PWA zu installieren, und kann helfen, den Installationsfluss für den Benutzer leichter zugänglich zu machen.

Diese Technik basiert auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis verfügt über eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- das Ereignis `beforeinstallprompt` beobachten
- das Standardverhalten des Ereignisses durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Diese Funktion wird auf iOS nicht unterstützt.

### Anpassen der Installationsaufforderung

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol der PWA. Wenn Sie Werte für die Manifestmitglieder [`description`](/de/docs/Web/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Manifest/Reference/screenshots) bereitstellen, werden diese Werte, nur auf Android, in der Installationsaufforderung angezeigt und bieten dem Benutzer zusätzlichen Kontext und Motivation, die PWA zu installieren.

Das untenstehende Bildschirmfoto zeigt, wie die Installationsaufforderung für die [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome auf einem Android-Gerät aussieht:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät zusammen mit anderen Apps angezeigt, die der Benutzer installiert hat, und wenn Sie auf das Symbol klicken, wird die App gestartet.

Sie können das [`display`](/de/docs/Web/Manifest/Reference/display)-Manifestmitglied verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA beim Starten erscheint. Insbesondere:

- `"standalone"` bedeutet, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich anfühlen soll, ohne Browserelemente
- `"browser"` bedeutet, dass die PWA als neuer Browsertab oder -fenster geöffnet werden soll, wie eine normale Website.

Wenn der Browser einen gegebenen Anzeigemodus nicht unterstützt, wird `display` auf einen unterstützten Anzeigemodus gemäß einer vordefinierten Sequenz zurückfallen. Die [`display_override`](/de/docs/Web/Manifest/Reference/display_override) ermöglicht es Ihnen, die Rückfallsequenz neu zu definieren.
