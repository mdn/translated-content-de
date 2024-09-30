---
title: PWAs installierbar machen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{PWASidebar}}

Eines der definitiven Merkmale einer PWA ist, dass der Browser sie zur Installation auf dem Gerät fördern kann. Einmal installiert, erscheint eine PWA für die Nutzer als plattform-spezifische App, ein permanentes Feature ihres Geräts, das sie direkt über das Betriebssystem starten können, wie jede andere App.

Zusammengefasst bedeutet das:

- Unterstützende Browser fördern die PWA zur Installation auf dem Gerät an den Nutzer.
- Die PWA kann wie eine plattform-spezifische App installiert werden und kann den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattform-spezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden in diesem Leitfaden jedes dieser Merkmale besprechen. Zuerst jedoch werden wir die Anforderungen diskutieren, die eine Web-App erfüllen muss, um zur Installation gefördert zu werden.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation gefördert wird, muss sie einige technische Anforderungen erfüllen. Wir können diese als die Mindestanforderungen betrachten, damit eine Web-App eine PWA sein kann.

> [!NOTE]
> Obwohl es keine Anforderung ist, dass eine PWA installierbar ist, nutzen viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Siehe das [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial für weitere Informationen.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und damit sie installierbar ist, muss sie ein Manifest enthalten.

Das Manifest wird mithilfe eines {{HTMLElement("link")}}-Elements im HTML der App eingebunden:

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

Das Manifest enthält ein einziges JSON-Objekt mit einer Sammlung von Mitgliedern, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein recht minimales Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

#### Erforderliche Manifestmitglieder

Browser auf Chromium-Basis, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, verlangen, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Manifest/name) oder [`short_name`](/de/docs/Web/Manifest/short_name)
- [`icons`](/de/docs/Web/Manifest/icons) muss ein 192px und ein 512px Icon enthalten
- [`start_url`](/de/docs/Web/Manifest/start_url)
- [`display`](/de/docs/Web/Manifest/display) und/oder [`display_override`](/de/docs/Web/Manifest/display_override)
- [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) muss `false` oder nicht vorhanden sein

Für eine vollständige Beschreibung jedes Mitglieds siehe die [Web-App-Manifest](/de/docs/Web/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll ausgeliefert werden, oder von einer lokalen Entwicklungsumgebung mithilfe von `localhost` oder `127.0.0.1` – mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts), der Ressourcen, die von `file://`-URLs geladen werden, als sicher betrachtet.

## Installation über einen App-Store

Nutzer erwarten, dass sie Apps in den App-Stores ihrer Plattform finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores verteilen. Der Prozess ist spezifisch für jeden App-Store:

- [Anleitung zum Veröffentlichen einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zum Veröffentlichen einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zum Veröffentlichen einer PWA im Meta Quest Store](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App-Stores vereinfacht. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und den iOS App Store.

Wenn Sie Ihre App im App-Store hinzugefügt haben, können Benutzer sie von dort aus installieren, genau wie eine plattform-spezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird die App dem Nutzer zur Installation angeboten. Der Nutzer erhält die Gelegenheit, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website verteilen können, sodass sie über die Websuche auffindbar ist, und sie gleichzeitig in App-Stores verteilen können, sodass Nutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Nutzer Ihre PWA im Web mit einem Browser, der sie nicht installieren kann, aufruft, kann er sie dennoch wie eine normale Website nutzen.

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform. Beispielsweise könnte ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Benutzer zur Seite navigiert:

![Chrome URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an, die fragt, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Icon der PWA an, die aus den [`name`](/de/docs/Web/Manifest/name) und [`icons`](/de/docs/Web/Manifest/icons) Manifestmitgliedern stammen.

### Browser-Unterstützung

Die Unterstützung für die Förderung der PWA-Installation aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifestdatei auf allen unterstützten Desktop-Betriebssystemen haben.
- Firefox und Safari unterstützen die Installation von PWAs mithilfe einer Manifestdatei nicht.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und der Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs über das Share-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen ebenfalls die Installation jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat oder nicht, und ohne Rücksicht auf die Installierbarkeitskriterien für die Manifestdatei.
Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Seite aktiv zur Installation fördert, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Das Installations-Prompt auslösen

Eine PWA kann ihre eigene Benutzeroberfläche auf der Seite bereitstellen, um dem Benutzer die Öffnung des Installations-Prompts zu ermöglichen, anstatt sich auf die standardmäßige vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dadurch kann eine PWA einen Kontext und einen Grund für den Benutzer bieten, die PWA zu installieren, was den Installationsablauf leichter auffindbar machen kann.

Diese Technik basiert auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window) Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode, die das Installations-Prompt zeigt. Daher kann eine PWA:

- ihren eigenen "Installieren"-Button hinzufügen,
- auf das `beforeinstallprompt`-Ereignis lauschen,
- das Standardverhalten des Ereignisses durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen,
- in der Ereignisbehandlung für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Die Installationseingabeaufforderung anpassen

Standardmäßig enthält das Installations-Prompt den Namen und das Icon der PWA. Wenn Sie Werte für die [`description`](/de/docs/Web/Manifest/description) und [`screenshots`](/de/docs/Web/Manifest/screenshots) Manifestmitglieder angeben, werden diese, ausschließlich auf Android, im Installations-Prompt angezeigt und geben dem Benutzer zusätzlichen Kontext und Motivation, die PWA zu installieren.

Der untenstehende Screenshot zeigt, wie das Installations-Prompt für das [PWAmp Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome unter Android aussieht:

![Installations-Prompt für PWAmp auf Android](pwamp-install-prompt-android.png)

## Die App starten

Sobald die PWA installiert ist, wird ihr Icon auf dem Gerät neben allen anderen Apps angezeigt, die der Benutzer installiert hat, und ein Klick auf das Icon startet die App.

Sie können das [`display`](/de/docs/Web/Manifest/display) Manifestmitglied verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA beim Starten erscheint. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattform-spezifische Anwendung aussehen und sich anfühlen soll, ohne Browser-UI-Elemente
- `"browser"` gibt an, dass die PWA wie eine normale Website als neuer Browser-Tab oder neues Fenster geöffnet werden soll.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` auf einen unterstützten Anzeigemodus gemäß einer vordefinierten Reihenfolge zurück. Mit [`display_override`](/de/docs/Web/Manifest/display_override) können Sie die Rückfallsequenz neu definieren.
