---
title: Installierbare PWAs erstellen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Ein prägendes Merkmal einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät gefördert werden kann. Einmal installiert, erscheint eine PWA für die Benutzer wie eine plattformspezifische App, eine permanente Funktion ihres Geräts, die sie direkt aus dem Betriebssystem heraus starten können, wie jede andere App.

Zusammenfassend lässt sich festhalten:

- Unterstützende Browser fördern die PWA zur Installation auf dem Gerät gegenüber dem Benutzer.
- Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website im Browser.

Wir werden jede dieser Funktionen in diesem Leitfaden besprechen. Zunächst werden wir jedoch die Anforderungen besprechen, die eine Web-App erfüllen muss, damit sie zur Installation gefördert wird.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation gefördert werden kann, muss sie einige technische Anforderungen erfüllen. Diese können als Mindestanforderungen betrachtet werden, damit eine Web-App eine PWA sein kann.

> [!NOTE]
> Obwohl es keine Anforderung für eine installierbare PWA ist, verwenden viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial.

### Das Web App Manifest

Ein Web App Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

Das Manifest wird mit einem {{HTMLElement("link")}}-Element im HTML der App eingebunden:

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

Wenn die PWA mehr als eine Seite hat, muss jede Seite in gleicher Weise auf das Manifest verweisen.

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Mitgliedern enthält, von denen jedes einen Aspekt des Erscheinungsbilds oder Verhaltens der PWA definiert. Hier ist ein ziemlich minimales Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

Chromium-basierte Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest folgende Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein 192px und ein 512px Icon enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden

Für eine vollständige Beschreibung jedes Mitglieds, siehe die [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` — mit oder ohne Portnummer — bereitgestellt werden.

Dies ist eine strengere Anforderung als [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts), die Ressourcen, die über `file://` URLs geladen werden, als sicher betrachtet.

## Installation aus einem App-Store

Benutzer erwarten, Apps im App-Store für ihre Plattform zu finden, wie im Google Play Store oder im Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores vertreiben. Der Vorgang ist spezifisch für jeden App-Store:

- [Anleitung zur Veröffentlichung einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zur Veröffentlichung einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store)
- [Anleitung zur Veröffentlichung einer PWA im Meta Quest Store](https://developers.meta.com/horizon/resources/publish-submit/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App-Stores erleichtert. Es unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App zum App-Store hinzugefügt haben, können Benutzer sie von dort aus installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser bestimmt, dass eine Web-App die zuvor beschriebenen Installierbarkeit-Kriterien erfüllt, wird er die App dem Benutzer zur Installation anbieten. Der Benutzer erhält dann die Möglichkeit, die App zu installieren. Das bedeutet, dass Sie Ihre PWA als Website verteilen können, wodurch sie durch Websuche auffindbar wird, und sie auch in App-Stores vertreiben können, sodass Benutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web aufruft und einen Browser verwendet, der sie nicht installieren kann, kann er sie trotzdem wie eine normale Website nutzen.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen. Beispielsweise kann ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Benutzer die Seite aufruft:

![Chrome URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an, die fragt, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

Die Eingabeaufforderung zeigt den Namen und das Symbol für die PWA an, die aus den [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifest-Mitgliedern stammen.

### Browser-Unterstützung

Die Unterstützung für die Promotion der PWA-Installation aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifest-Datei auf allen unterstützten Desktop-Betriebssystemen haben.
- Safari unterstützt Hinzufügen zum Dock (_Ablage_ > _Zum Dock hinzufügen..._) auf macOS Sonoma (Safari 17) und höher für jede Web-App, mit oder ohne eine Manifest-Datei.
- Firefox unterstützt die Installation von PWAs unter Verwendung einer Manifest-Datei nicht.

Auf Mobilgeräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser alle die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Ab iOS 16.4 können PWAs im Freigabemenü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch, dass Benutzer jede Website als App installieren, unabhängig davon, ob sie eine Manifest-Datei hat und ohne Rücksicht auf die Installierbarkeitskriterien für die Manifest-Datei.
Der Vorteil der Verwendung einer Manifest-Datei besteht darin, dass der Browser die Seite aktiv zur Installation fördert, wenn sie aufgerufen wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen der Installationsaufforderung

Eine PWA kann ihre eigene In-Page-Benutzeroberfläche bereitstellen, damit der Benutzer die Installationsaufforderung öffnen kann, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht einer PWA, einen Kontext und einen Grund für den Benutzer zur Installation der PWA bereitzustellen und kann helfen, den Installationsablauf leichter auffindbar zu machen.

Diese Technik basiert auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis lauschen
- das Standardverhalten des Ereignisses durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Anpassung der Installationsaufforderung

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol für die PWA. Wenn Sie Werte für die [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) Manifest-Mitglieder angeben, werden diese Werte nur auf Android in der Installationsaufforderung angezeigt, was dem Benutzer zusätzlichen Kontext und Motivation zur Installation der PWA bietet.

Der folgende Screenshot zeigt, wie die Installationsaufforderung für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) in Google Chrome auf Android aussieht:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben allen anderen Apps angezeigt, die der Benutzer installiert hat, und das Klicken auf das Symbol startet die App.

Sie können das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Mitglied verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA aussieht, wenn sie gestartet wird. Insbesondere:

- `"standalone"` bedeutet, dass die PWA wie eine plattformspezifische Anwendung aussehen und funktionieren soll, ohne Browser-UI-Elemente
- `"browser"` bedeutet, dass die PWA wie eine normale Website als neuer Browser-Tab oder -Fenster geöffnet werden soll.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` auf einen unterstützten Anzeigemodus zurück, entsprechend einer vordefinierten Reihenfolge. Die [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es Ihnen, die Fallback-Sequenz neu zu definieren.
