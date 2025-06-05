---
title: Installierbare PWAs erstellen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 7951e24c5805209d503be95ad2d48e87e2125a85
---

Eines der bestimmenden Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät beworben werden kann. Nach der Installation wird eine PWA den Nutzern als plattformspezifische App angezeigt, die dauerhaft auf ihrem Gerät vorhanden ist und direkt vom Betriebssystem aus wie jede andere App gestartet werden kann.

Zusammenfassend lässt sich dies wie folgt darstellen:

- Unterstützende Browser bewerben die PWA für die Installation auf dem Gerät gegenüber dem Nutzer.
- Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden diese Funktionen in diesem Leitfaden besprechen. Zunächst werden wir jedoch die Anforderungen besprechen, die eine Web-App erfüllen muss, damit sie zur Installation beworben werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation beworben werden kann, muss sie einige technische Anforderungen erfüllen. Diese können als die Mindestanforderungen angesehen werden, damit eine Web-App eine PWA ist.

> [!NOTE]
> Obwohl es keine Voraussetzung für eine PWA ist, installierbar zu sein, verwenden viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung bereitzustellen.
> Weitere Informationen finden Sie im [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät aussehen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

Das Manifest wird mit einem {{HTMLElement("link")}} Element im HTML der App eingebunden:

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

Hat die PWA mehr als eine Seite, so muss jede Seite das Manifest auf diese Weise referenzieren.

Das Manifest enthält ein einzelnes JSON-Objekt, das eine Sammlung von Mitgliedern umfasst, von denen jedes einen Aspekt des Aussehens oder Verhaltens der PWA definiert. Hier ist ein eher minimales Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

Chromium-basierte Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein Symbol in den Größen 192px und 512px enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden

Eine vollständige Beschreibung aller Mitglieder finden Sie in der [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Referenzdokumentation.

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung über `localhost` oder `127.0.0.1` — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts), die Ressourcen, die von `file://` URLs geladen werden, als sicher betrachten.

## Installation aus einem App-Store

Nutzer erwarten, Apps im App-Store ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie verpacken und über App-Stores vertreiben. Der Prozess ist spezifisch für jeden App-Store:

- [Anleitung zur Veröffentlichung einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zur Veröffentlichung einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zur Veröffentlichung einer PWA im Meta Quest Store](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das den Prozess der Verpackung und Veröffentlichung einer PWA für verschiedene App-Stores vereinfacht. Es unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App dem App-Store hinzugefügt haben, können Nutzer sie von dort installieren, genau wie eine plattformspezifische App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Kriterien für die Installierbarkeit erfüllt, wird die App dem Nutzer zur Installation angeboten. Der Nutzer erhält die Möglichkeit, die App zu installieren. Das bedeutet, Sie können Ihre PWA wie eine Website verteilen, sodass sie über die Websuche auffindbar ist, und sie auch in App-Stores verbreiten, damit Nutzer sie dort finden können.

Das ist ein hervorragendes Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es zeigt auch, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Nutzer Ihre PWA im Web mit einem Browser entdeckt, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert je nach Browser und Plattform. Beispielsweise könnte ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Nutzer die Seite besucht:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Nutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob er die PWA installieren möchte, und wenn er einwilligt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol für die PWA an, die aus den [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifest-Mitgliedern entnommen werden.

### Browser-Unterstützung

Die Unterstützung für die Bewerbung der Installation von PWAs aus dem Web variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die über eine Manifest-Datei verfügen, auf allen unterstützten Desktop-Betriebssystemen.
- Safari unterstützt "Zum Dock hinzufügen" (_Datei_ > _Zum Dock hinzufügen..._) auf macOS Sonoma (Safari 17) und später für jede Web-App mit oder ohne Manifest-Datei.
- Firefox unterstützt nicht die Installation von PWAs mithilfe einer Manifest-Datei.

Auf mobilen Geräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser die Installation von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs aus dem Freigabemenü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für den Desktop und Android, Safari für den Desktop und Edge für den Desktop unterstützen auch die Installation jeder Website als App, unabhängig davon, ob sie eine Manifest-Datei hat oder nicht und ohne Rücksicht auf die Kriterien für die Installierbarkeit der Manifest-Datei. Der Vorteil der Verwendung einer Manifest-Datei besteht darin, dass der Browser die Website aktiv für die Installation bewirbt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Das Installationsaufforderung auslösen

Eine PWA kann ihre eigene Benutzeroberfläche auf der Seite bereitstellen, damit der Nutzer die Installationsaufforderung öffnen kann, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht es einer PWA, einigen Kontext und einen Grund für den Nutzer zur Installation der PWA bereitzustellen und kann dazu beitragen, den Installationsprozess für den Nutzer leichter auffindbar zu machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event) Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window) Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis verfügt über eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) Methode, die die Installationsaufforderung anzeigt. So kann eine PWA:

- einen eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt` Ereignis lauschen
- das Standardverhalten des Ereignisses durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufheben
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird unter iOS nicht unterstützt.

### Die Installationsaufforderung anpassen

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol für die PWA. Wenn Sie Werte für die [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) Manifest-Mitglieder bereitstellen, dann werden unter Android nur diese Werte in der Installationsaufforderung angezeigt, sodass der Nutzer zusätzlichen Kontext und Motivation zur Installation der PWA erhält.

Das untenstehende Bildschirmfoto zeigt, wie die Installationsaufforderung für die [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome unter Android aussieht:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben allen anderen Apps angezeigt, die der Nutzer installiert hat, und das Klicken auf das Symbol startet die App.

Sie können das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Manifest-Mitglied verwenden, um den _Anzeigemodus_ zu steuern: das heißt, wie die PWA aussieht, wenn sie gestartet wird. Insbesondere:

- `"standalone"` gibt an, dass die PWA aussehen und sich wie eine plattformspezifische Anwendung verhalten soll, ohne Elemente der Browser-Benutzeroberfläche
- `"browser"` gibt an, dass die PWA als neuer Browsertab oder -fenster geöffnet werden soll, genau wie eine normale Website.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` auf einen unterstützten Anzeigemodus gemäß einer vordefinierten Sequenz zurück. Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es Ihnen, die Fallback-Sequenz neu zu definieren.
