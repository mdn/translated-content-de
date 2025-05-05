---
title: Installierbarkeit von PWAs
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Eines der charakteristischen Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät empfohlen werden kann. Einmal installiert, erscheint eine PWA für Benutzer wie eine plattformspezifische App, eine dauerhafte Funktion ihres Geräts, die sie direkt über das Betriebssystem starten können, wie jede andere App auch.

Wir können dies wie folgt zusammenfassen:

- Unterstützende Browser empfehlen die PWA dem Benutzer zur Installation auf dem Gerät.
- Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jedes dieser Features in diesem Leitfaden besprechen. Zunächst werden wir jedoch die Anforderungen besprechen, die eine Web-App erfüllen muss, damit sie zur Installation empfohlen wird.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation empfohlen wird, muss sie einige technische Anforderungen erfüllen. Wir können diese als Mindestanforderungen betrachten, damit eine Web-App als PWA gilt.

> [!NOTE]
> Obwohl es keine Voraussetzung für die Installierbarkeit einer PWA ist, nutzen viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im Tutorial [CycleTracker: Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät erscheinen und sich verhalten soll. Damit eine Web-App als PWA gilt, muss sie installierbar sein, und um installierbar zu sein, muss sie ein Manifest enthalten.

Das Manifest wird in der HTML der App mit einem {{HTMLElement("link")}}-Element eingebunden:

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

Das Manifest enthält ein einzelnes JSON-Objekt mit einer Sammlung von Mitgliedern, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein minimaler Manifest-Abschnitt, der nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

Auf Chromium basierende Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, verlangen, dass das Manifest die folgenden Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein 192px- und ein 512px-Icon enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Für eine vollständige Beschreibung jedes Mitglieds siehe die [Web-App-Manifest-Referenzdokumentation](/de/docs/Web/Progressive_web_apps/Manifest).

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll bereitgestellt werden oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts), der Ressourcen betrachtet, die von `file://`-URLs geladen werden, als sicher.

## Installation aus einem App Store

Benutzer erwarten, Apps im App Store für ihre Plattform zu finden, wie den Google Play Store oder den Apple App Store.

Wenn Ihre App die Installationsvoraussetzungen erfüllt, können Sie sie paketieren und über App Stores vertreiben. Der Prozess ist spezifisch für jeden App Store:

- [Anleitung zum Veröffentlichen einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zum Veröffentlichen einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [Anleitung zum Veröffentlichen einer PWA im Meta Quest Store](https://developers.meta.com/horizon/documentation/web/pwa-submit-app/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, um den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App Stores zu vereinfachen. Es unterstützt den Google Play Store, den Microsoft Store, den Meta Quest Store und den iOS App Store.

Wenn Sie Ihre App in den App Store aufgenommen haben, können Benutzer sie von dort aus, genauso wie eine plattformspezifische App, installieren.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installationskriterien erfüllt, wird die App dem Benutzer zur Installation empfohlen. Dem Benutzer wird die Möglichkeit geboten, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website vertreiben können und sie durch Websuche auffindbar machen können, sowie auch in App Stores vertreiben, sodass Benutzer sie dort finden können.

Dies ist ein hervorragendes Beispiel dafür, wie PWAs das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung mit PWAs funktioniert: Wenn ein Benutzer Ihre PWA im Web in einem Browser entdeckt, der diese nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert je nach Browser und Plattform. Zum Beispiel kann ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Benutzer zur Seite navigiert:

![Chrome-URL-Leiste, zeigt PWA-Installationssymbol](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob die PWA installiert werden soll, und wenn der Benutzer zustimmt, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol der PWA an, die aus den Manifest-Mitgliedern [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) stammen.

### Browser-Unterstützung

Die Unterstützung für die PWA-Installationspromotion aus dem Web variiert je nach Browser und Plattform.

Auf Desktop:

- Chromium-Browser unterstützen das Installieren von PWAs, die eine Manifestdatei haben, auf allen unterstützten Desktop-Betriebssystemen.
- Firefox und Safari unterstützen nicht das Installieren von PWAs mithilfe einer Manifestdatei.

Auf Mobilgeräten:

- Auf Android unterstützen Firefox, Chrome, Edge, Opera und Samsung Internet Browser das Installieren von PWAs.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Ab iOS 16.4 können PWAs im Safari-, Chrome-, Edge-, Firefox- und Orion-Browser aus dem Teilen-Menü installiert werden.

### Installieren von Websites als Apps

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen ebenfalls Benutzer bei der Installation jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat oder nicht, und ohne Berücksichtigung der Installierbarkeitskriterien für die Manifestdatei. Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Website aktiv zur Installation empfiehlt, wenn diese besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen der Installationsaufforderung

Eine PWA kann ihre eigene Benutzeroberfläche auf der Seite bereitstellen, damit der Benutzer die Installationsaufforderung öffnet, anstatt sich auf die standardmäßig vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dies ermöglicht es einer PWA, dem Benutzer einen Kontext und einen Grund für die Installation der PWA zu bieten und kann helfen, den Installationsprozess leichter auffindbar zu machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis verfügt über eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis horchen
- das Standardverhalten des Ereignisses durch Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignishandler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Anpassen der Installationsaufforderung

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol der PWA. Wenn Sie Werte für die Manifest-Mitglieder [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) bereitstellen, werden diese Werte nur auf Android in der Installationsaufforderung angezeigt, wodurch dem Benutzer zusätzlicher Kontext und Motivation zur Installation der PWA gegeben werden.

Das folgende Bild zeigt, wie die Installationsaufforderung für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome auf einem Android-Gerät aussieht:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben allen anderen Apps angezeigt, die der Benutzer installiert hat, und ein Klick auf das Symbol startet die App.

Sie können das Manifest-Mitglied [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) verwenden, um den _Display Modus_ zu steuern: also wie die PWA beim Starten erscheinen soll. Insbesondere:

- `"standalone"` gibt an, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich verhalten soll, ohne Browser-UI-Elemente.
- `"browser"` gibt an, dass die PWA als neuer Browser-Tab oder ein neues Fenster geöffnet werden soll, wie eine normale Website.

Wenn der Browser einen bestimmten Display-Modus nicht unterstützt, fällt `display` auf einen unterstützten Display-Modus gemäß einer vordefinierten Reihenfolge zurück. Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es, die Rückfall-Sequenz neu zu definieren.
