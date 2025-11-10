---
title: Installierbare PWAs erstellen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

Eines der bestimmenden Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät beworben werden kann. Einmal installiert erscheint eine PWA für Benutzer wie eine plattformspezifische App, ein permanentes Merkmal ihres Geräts, das sie direkt vom Betriebssystem aus starten können, wie jede andere App.

Wir können dies wie folgt zusammenfassen:

- Unterstützende Browser bewerben die PWA zur Installation auf dem Gerät.
- Die PWA kann wie eine plattformspezifische App installiert werden und kann den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Diese Funktionen werden wir in diesem Leitfaden besprechen. Zuerst jedoch werden wir die Anforderungen diskutieren, die eine Web-App erfüllen muss, damit sie zur Installation beworben werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation beworben wird, muss sie einige technische Anforderungen erfüllen. Diese können wir als die Mindestanforderungen betrachten, damit eine Web-App eine PWA ist.

> [!NOTE]
> Obwohl es keine Anforderung für eine installierbare PWA ist, verwenden viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App als PWA gilt, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

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

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Mitgliedern enthält, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein ziemlich minimalistisches Manifest, das nur aus zwei Mitgliedern besteht: `"name"` und `"icons"`.

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

Auf Chromium basierende Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein 192px und ein 512px Icon enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Eine vollständige Beschreibung jedes Mitglieds finden Sie in der [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts), die Ressourcen, die von `file://` URLs geladen werden, als sicher betrachten.

## Installation aus einem App-Store

Benutzer erwarten, Apps im App Store ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores vertreiben. Der Prozess ist spezifisch für jeden App-Store:

- [Anleitung zum Veröffentlichen einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zum Veröffentlichen einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store)
- [Anleitung zum Veröffentlichen einer PWA im Meta Quest Store](https://developers.meta.com/horizon/resources/publish-submit/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App-Stores vereinfacht. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App im App-Store hinzugefügt haben, können Benutzer sie von dort installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird sie dem Benutzer zur Installation angeboten. Der Benutzer erhält die Möglichkeit, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website verbreiten können, wodurch sie über die Websuche auffindbar wird, und sie auch in App-Stores verteilen, damit Benutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web auf einem Browser findet, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform. Ein Browser könnte z.B. ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Benutzer zur Seite navigiert:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung, die fragt, ob die PWA installiert werden soll, und bei Annahme wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol für die PWA an, die den [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifest-Mitgliedern entnommen werden.

### Browser-Unterstützung

Die Unterstützung für die Installation von PWAs aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifest-Datei haben, auf allen unterstützten Desktop-Betriebssystemen.
- Safari unterstützt "Zum Dock hinzufügen" (_Ablage_ > _Zum Dock hinzufügen..._) unter macOS Sonoma (Safari 17) und später für jede Web-App, ob mit oder ohne Manifest-Datei.
- Firefox unterstützt die Installation von PWAs mit einer Manifest-Datei nicht.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser die Installation von PWAs.
- Unter iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Ab iOS 16.4 können PWAs über das Teilen-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch die Installation beliebiger Websites als App, ob mit oder ohne eine Manifest-Datei und unabhängig von den Installationskriterien für die Manifest-Datei.
Der Vorteil der Verwendung einer Manifest-Datei besteht darin, dass der Browser die Website aktiv zur Installation bewerben wird, wenn sie besucht wird, und Entwickler können das Installationsverhalten anpassen.

### Die Installationsaufforderung auslösen

Eine PWA kann ihre eigene In-Page-Benutzeroberfläche bereitstellen, damit der Benutzer die Installationsaufforderung öffnen kann, anstatt sich auf die vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Auf diese Weise kann eine PWA Kontext und einen Grund für die Installation der PWA bereitstellen und das Auffinden der Installationsbenutzer-Experience erleichtern.

Diese Technik basiert auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis warten
- das Standardverhalten des Ereignisses mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindern
- im Ereignishandler ihres eigenen "Installieren"-Buttons [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird unter iOS nicht unterstützt.

### Die Installationsaufforderung anpassen

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol für die PWA. Wenn Sie Werte für die [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots)-Manifest-Mitglieder bereitstellen, werden diese Werte nur auf Android in der Installationsaufforderung angezeigt, um dem Benutzer zusätzlichen Kontext und Motivation zur Installation der PWA zu geben.

Das untenstehende Screenshot zeigt, wie die Installationsaufforderung für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome aussieht, auf Android ausgeführt:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Die App starten

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben anderen Apps angezeigt, die der Benutzer installiert hat, und beim Klicken auf das Symbol wird die App gestartet.

Sie können das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifest-Mitglied verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA aussieht, wenn sie gestartet wird. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich anfühlen soll, ohne Browser-Benutzeroberflächenelemente
- `"browser"` gibt an, dass die PWA als neuer Browser-Tab oder -Fenster geöffnet werden soll, genau wie eine normale Website.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` auf einen unterstützten Anzeigemodus gemäß einer vordefinierten Sequenz zurück. Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) erlaubt es Ihnen, die Rückfallsequenz neu zu definieren.
