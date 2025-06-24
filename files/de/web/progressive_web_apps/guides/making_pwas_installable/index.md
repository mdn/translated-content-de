---
title: Installation von PWAs
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 68e3afd00cb531f3536ed9343aaa0f9e06e6ef94
---

Eines der definierenden Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät vorgeschlagen werden kann. Einmal installiert, erscheint eine PWA den Nutzern wie eine plattformspezifische App, als permanentes Merkmal ihres Geräts, das sie direkt über das Betriebssystem starten können, wie jede andere App.

Zusammengefasst bedeutet das:

- Unterstützende Browser bewerben die PWA zur Installation auf dem Gerät.
- Die PWA kann wie eine plattformspezifische App installiert werden und der Installationsprozess kann angepasst werden.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jeden dieser Aspekte in diesem Leitfaden besprechen. Zunächst besprechen wir jedoch die Anforderungen, die eine Web-App erfüllen muss, damit sie zur Installation beworben werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation beworben werden kann, muss sie einige technische Anforderungen erfüllen. Diese können als Mindestanforderungen betrachtet werden, damit eine Web-App als PWA gilt.

> [!NOTE]
> Auch wenn es keine Anforderung für die Installierbarkeit einer PWA ist, nutzen viele PWAs [Service-Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im [CycleTracker: Service-Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)-Tutorial.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App eine PWA sein kann, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

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

Wenn die PWA mehr als eine Seite hat, muss jede Seite das Manifest auf diese Weise referenzieren.

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Mitgliedern umfasst, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein eher minimalistisches Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

Chromium-basierte Browser, darunter Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) müssen ein 192px- und ein 512px-Icon enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Eine vollständige Beschreibung jedes Mitglieds finden Sie in der [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest)-Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung, die `localhost` oder `127.0.0.1` — mit oder ohne Portnummer — verwendet.

Dies ist eine strengere Anforderung als [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts), die als sicher betrachtet werden, wenn sie von `file://`-URLs geladen werden.

## Installation aus einem App-Store

Benutzer erwarten, dass sie Apps im App-Store ihrer Plattform finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores vertreiben. Der Prozess ist für jeden App-Store spezifisch:

- [Anleitung zur Veröffentlichung einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zur Veröffentlichung einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zur Veröffentlichung einer PWA im Meta Quest Store](https://developers.meta.com/horizon/resources/publish-submit/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess der Verpackung und Veröffentlichung einer PWA für verschiedene App-Stores vereinfacht. Es unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App im App-Store hinzugefügt haben, können Benutzer sie von dort aus installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird die App dem Benutzer zur Installation vorgeschlagen. Der Benutzer wird die Möglichkeit erhalten, die App zu installieren. Das bedeutet, dass Sie Ihre PWA als Website vertreiben können, wodurch sie über die Websuche auffindbar wird, und sie gleichzeitig in App-Stores vertreiben können, sodass Benutzer sie auch dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web mit einem Browser entdeckt, der sie nicht installieren kann, kann er sie wie eine normale Website verwenden.

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert je nach Browser und Plattform. Beispielsweise kann ein Browser ein "Installieren"-Symbol in der URL-Leiste einblenden, wenn der Benutzer zur Seite navigiert:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser ein Dialogfeld an, in dem gefragt wird, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

Das Dialogfeld zeigt den Namen und das Symbol für die PWA an, wobei die Informationen aus den Manifestmitgliedern [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) stammen.

### Browser-Unterstützung

Die Unterstützung für die Bewerbung der PWA-Installation aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifestdatei haben, auf allen unterstützten Desktop-Betriebssystemen.
- Safari unterstützt das Hinzufügen zum Dock (_Datei_ > _Zum Dock hinzufügen..._) auf macOS Sonoma (Safari 17) und höher für jede Web-App mit oder ohne Manifestdatei.
- Firefox unterstützt nicht die Installation von PWAs mit einer Manifestdatei.

Auf Mobilgeräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und höher können PWAs aus dem Teilen-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch die Installation jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat oder nicht, und ohne Berücksichtigung der Installierbarkeitskriterien für die Manifestdatei. Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Seite aktiv zur Installation vorschlägt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen des Installations-Dialogfeldes

Eine PWA kann ihre eigene In-Page-Benutzeroberfläche bereitstellen, um den Installations-Dialog anzuzeigen, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht einer PWA, den Benutzern einen Kontext und einen Grund zur Installation der PWA zu bieten und kann helfen, den Installationsprozess leichter auffindbar zu machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser bestimmt hat, dass die PWA installierbar ist. Dieses Ereignis besitzt eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die das Installations-Dialogfeld anzeigt. Eine PWA kann daher:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis hören
- das Standardverhalten des Ereignisses mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Anpassung des Installations-Dialogfeldes

Standardmäßig enthält das Installations-Dialogfeld den Namen und das Symbol für die PWA. Wenn Sie Werte für die Manifestmitglieder [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) angeben, werden diese Werte nur auf Android im Installations-Dialogfeld angezeigt und geben dem Benutzer zusätzlichen Kontext und Motivation zur Installation der PWA.

Das folgende Screenshot zeigt, wie das Installations-Dialogfeld für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) unter Google Chrome auf Android aussieht:

![Installations-Dialog für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät zusammen mit den anderen Apps angezeigt, die der Benutzer installiert hat, und durch Klicken auf das Symbol wird die App gestartet.

Sie können das Manifestmitglied [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) verwenden, um den _Anzeigemodus_ zu kontrollieren: also wie die PWA erscheint, wenn sie gestartet wird. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich anfühlen soll, ohne Elemente der Browser-Benutzeroberfläche
- `"browser"` gibt an, dass die PWA als neuer Browsing-Tab oder neues Browser-Fenster geöffnet werden soll, ähnlich wie eine normale Website.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, wird `display` auf einen unterstützten Anzeigemodus nach einer vordefinierten Reihenfolge zurückfallen. Die [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es Ihnen, die Rückfallreihenfolge neu zu definieren.
