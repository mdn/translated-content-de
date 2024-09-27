---
title: PWAs installierbar machen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{PWASidebar}}

Ein wesentliches Merkmal einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät vorgeschlagen werden kann. Nach der Installation erscheint eine PWA den Nutzern als eine plattform-spezifische App, eine dauerhafte Funktion ihres Geräts, die sie direkt vom Betriebssystem aus wie jede andere App starten können.

Zusammenfassend lässt sich dies wie folgt beschreiben:

- Unterstützende Browser schlagen den Nutzern die Installation der PWA auf ihrem Gerät vor.
- Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsvorgang anpassen.
- Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jede dieser Funktionen in diesem Leitfaden besprechen. Zuerst werden wir jedoch die Anforderungen erörtern, die eine Web-App erfüllen muss, damit sie zur Installation vorgeschlagen werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation vorgeschlagen wird, muss sie einige technische Anforderungen erfüllen. Diese können als die Mindestanforderungen für eine Web-App, um eine PWA zu sein, betrachtet werden.

> [!NOTE]
> Auch wenn es keine Voraussetzung ist, damit eine PWA installierbar ist, nutzen viele PWAs [Service Workers](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im Tutorial [CycleTracker: Service workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

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

Wenn die PWA mehr als eine Seite hat, muss jede Seite auf diese Weise auf das Manifest verweisen.

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Elementen enthält, von denen jedes einen Aspekt des Aussehens oder Verhaltens der PWA definiert. Hier ist ein eher minimalistisches Manifest, das nur zwei Elemente enthält: `"name"` und `"icons"`.

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

Chromium-basierte Browser, darunter Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest die folgenden Elemente enthält:

- [`name`](/de/docs/Web/Manifest/name) oder [`short_name`](/de/docs/Web/Manifest/short_name)
- [`icons`](/de/docs/Web/Manifest/icons) muss ein 192px und ein 512px Icon enthalten
- [`start_url`](/de/docs/Web/Manifest/start_url)
- [`display`](/de/docs/Web/Manifest/display) und/oder [`display_override`](/de/docs/Web/Manifest/display_override)
- [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) muss `false` sein oder nicht vorhanden

Eine vollständige Beschreibung jedes Elements finden Sie in der [Web-App-Manifest](/de/docs/Web/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie entweder über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als der [sichere Kontext](/de/docs/Web/Security/Secure_Contexts), der Ressourcen, die von `file://`-URLs geladen werden, als sicher erachtet.

## Installation aus einem App Store

Nutzer erwarten, Apps im App Store ihrer Plattform zu finden, wie im Google Play Store oder im Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App Stores vertreiben. Der Prozess ist für jeden App Store spezifisch:

- [Anleitung zur Veröffentlichung einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zur Veröffentlichung einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zur Veröffentlichung einer PWA im Meta Quest Store](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, um den Prozess der Verpackung und Veröffentlichung einer PWA für verschiedene App Stores zu vereinfachen. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App in den App Store aufgenommen haben, können Nutzer sie von dort installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installationskriterien erfüllt, wird die App dem Nutzer zur Installation vorgeschlagen. Der Nutzer erhält die Möglichkeit, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website vertreiben können, die über die Websuche auffindbar ist, und sie auch in App Stores vertreiben können, damit Nutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es zeigt auch, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Nutzer Ihre PWA im Web sieht, mit einem Browser, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform. Beispielsweise könnte ein Browser ein "Installieren"-Icon in der URL-Leiste anzeigen, wenn der Nutzer die Seite aufruft:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Nutzer das Icon auswählt, zeigt der Browser eine Aufforderung an, ob die PWA installiert werden soll. Wenn der Nutzer zustimmt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Icon der PWA an, die aus den Manifest-Elementen [`name`](/de/docs/Web/Manifest/name) und [`icons`](/de/docs/Web/Manifest/icons) entnommen werden.

### Unterstützung durch Browser

Die Unterstützung für die Bewerbung der PWA-Installation aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifest-Datei haben, auf allen unterstützten Desktop-Betriebssystemen.
- Firefox und Safari unterstützen die Installation von PWAs mit einer Manifest-Datei nicht.

Auf Mobilgeräten:

- Unter Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser alle die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs aus dem Share-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Installation von Websites als Apps

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch die Installation jeder Website als App, unabhängig davon, ob sie eine Manifest-Datei hat und ohne Rücksicht auf die Installierbarkeitskriterien für die Manifestdatei. Der Vorteil der Verwendung einer Manifest-Datei besteht darin, dass der Browser die Site aktiv für die Installation vorschlägt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen der Installationsaufforderung

Eine PWA kann ihre eigene Benutzeroberfläche auf der Seite bereitstellen, um den Benutzer aufzufordern, die Installationsaufforderung zu öffnen, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dadurch kann eine PWA den Nutzern einen Kontext und einen Grund zur Installation der PWA bieten und den Installationsablauf leichter auffindbar machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Event, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Event hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. So kann eine PWA:

- ihren eigenen "Installieren"-Button hinzufügen
- dem `beforeinstallprompt`-Event lauschen
- das Standardverhalten des Events mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Event-Handler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Anpassung der Installationsaufforderung

Standardmäßig enthält die Installationsaufforderung den Namen und das Icon der PWA. Wenn Sie Werte für die Manifest-Elemente [`description`](/de/docs/Web/Manifest/description) und [`screenshots`](/de/docs/Web/Manifest/screenshots) bereitstellen, werden diese Werte nur auf Android in der Installationsaufforderung angezeigt und geben dem Nutzer zusätzlichen Kontext und Motivation, die PWA zu installieren.

Das unten stehende Screenshot zeigt, wie die Installationsaufforderung für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome aussieht, das auf Android läuft:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Icon auf dem Gerät neben allen anderen Apps, die der Nutzer installiert hat, angezeigt, und ein Klick auf das Icon startet die App.

Sie können das Manifest-Element [`display`](/de/docs/Web/Manifest/display) verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA angezeigt wird, wenn sie gestartet wird. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich anfühlen soll, ohne Browser-Benutzerelemente
- `"browser"` gibt an, dass die PWA als neuer Browser-Tab oder neues Fenster geöffnet werden soll, genau wie eine normale Website.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` auf einen unterstützten Anzeigemodus gemäß einer vorgegebenen Reihenfolge zurück. Mit [`display_override`](/de/docs/Web/Manifest/display_override) können Sie die Rückfallreihenfolge neu definieren.
