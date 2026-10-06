---
title: PWAs installierbar machen
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Eine der kennzeichnenden Eigenschaften einer PWA ist, dass der Browser Nutzern ihre Installation auf dem Gerät anbieten kann. Nach der Installation erscheint eine PWA als plattformspezifische App: Sie ist dauerhaft auf dem Gerät verfügbar und kann wie jede andere App direkt über das Betriebssystem gestartet werden.

Zusammengefasst bedeutet das:

- Unterstützende Browser bieten Nutzern an, die PWA auf ihrem Gerät zu installieren.
- Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben den plattformspezifischen Apps.
- Nach der Installation kann die PWA als eigenständige App statt als Website in einem Browser gestartet werden.

In diesem Leitfaden behandeln wir jede dieser Funktionen. Zunächst betrachten wir jedoch die Voraussetzungen, die eine Web-App erfüllen muss, damit ihre Installation angeboten wird.

## Installierbarkeit

Damit ein unterstützender Browser die Installation einer Web-App anbieten kann, muss sie einige technische Voraussetzungen erfüllen. Diese können als Mindestanforderungen an eine Web-App gelten, damit sie eine PWA ist.

> [!NOTE]
> [Service Workers](/de/docs/Web/API/Service_Worker_API) sind keine Voraussetzung für die Installierbarkeit einer PWA. Viele PWAs verwenden sie jedoch, um eine Offline-Nutzung zu ermöglichen.
> Weitere Informationen finden Sie im Tutorial [CycleTracker: Service Workers](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät aussehen und sich verhalten soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein. Dazu muss sie ein Manifest enthalten.

Das Manifest wird mit einem {{HTMLElement("link")}}-Element in den HTML-Code der App eingebunden:

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

Das Manifest enthält ein einzelnes JSON-Objekt mit mehreren Eigenschaften, die jeweils einen Aspekt des Erscheinungsbilds oder Verhaltens der PWA festlegen. Hier ist ein minimales Manifest mit nur zwei Eigenschaften: `"name"` und `"icons"`.

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

#### Erforderliche Manifest-Eigenschaften

Chromium-basierte Browser, darunter Google Chrome, Samsung Internet und Microsoft Edge, verlangen, dass das Manifest die folgenden Eigenschaften enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) muss ein Symbol mit 192 px und eines mit 512 px enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder fehlen

Eine vollständige Beschreibung aller Eigenschaften finden Sie in der Referenzdokumentation zum [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest).

### HTTPS, localhost oder Loopback sind erforderlich

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll oder aus einer lokalen Entwicklungsumgebung über `localhost` oder `127.0.0.1` bereitgestellt werden – mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als die für einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts), bei dem auch Ressourcen als sicher gelten, die über `file://`-URLs geladen werden.

## Installation aus einem App-Store

Nutzer erwarten, Apps im App-Store ihrer Plattform zu finden, etwa im Google Play Store oder im Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie paketieren und über App-Stores vertreiben. Das Verfahren unterscheidet sich je nach App-Store:

- [Anleitung zur Veröffentlichung einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zur Veröffentlichung einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store)
- [Anleitung zur Veröffentlichung einer PWA im Meta Quest Store](https://developers.meta.com/vr/resources/publish-submit/)

[PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Tool, das das Paketieren und Veröffentlichen einer PWA für verschiedene App-Stores vereinfacht. Es unterstützt den Google Play Store, den Microsoft Store, den Meta Quest Store und den iOS App Store.

Wenn Sie Ihre App einem App-Store hinzugefügt haben, können Nutzer sie dort wie eine plattformspezifische App installieren.

## Installation über das Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Kriterien für die Installierbarkeit erfüllt, bietet er Nutzern an, sie zu installieren. So können Sie Ihre PWA als Website bereitstellen, damit sie über die Websuche gefunden werden kann, und sie zugleich über App-Stores vertreiben.

Das zeigt, wie PWAs die Vorteile beider Wege verbinden können. Es ist auch ein gutes Beispiel dafür, wie progressive Verbesserung bei PWAs funktioniert: Wenn Nutzer Ihre PWA im Web mit einem Browser aufrufen, der sie nicht installieren kann, können sie sie wie eine gewöhnliche Website verwenden.

Die Benutzeroberfläche für die Installation einer PWA aus dem Web unterscheidet sich je nach Browser und Plattform. Beispielsweise kann ein Browser ein „Installieren“-Symbol in der Adressleiste anzeigen, wenn Nutzer die Seite aufrufen:

![Chrome-Adressleiste mit Symbol zur Installation einer PWA](pwa-install.png)

Wenn Nutzer das Symbol auswählen, zeigt der Browser eine Aufforderung an, die PWA zu installieren. Stimmen sie zu, wird die PWA installiert.

Die Aufforderung zeigt den Namen und das Symbol der PWA an. Diese stammen aus den Manifest-Eigenschaften [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons).

### Browser-Unterstützung

Ob Browser die Installation einer PWA aus dem Web anbieten, hängt vom Browser und von der Plattform ab.

Auf Desktop-Geräten:

- Chromium-Browser unterstützen die Installation von PWAs mit einer Manifestdatei auf allen unterstützten Desktop-Betriebssystemen.
- Safari unterstützt auf macOS Sonoma (Safari 17) und neuer „Zum Dock hinzufügen“ (_Ablage_ > _Zum Dock hinzufügen …_) für jede Web-App, unabhängig davon, ob sie eine Manifestdatei hat.
- Firefox unterstützt die Installation von PWAs mithilfe einer Manifestdatei nicht.

Auf Mobilgeräten:

- Unter Android installieren nur die folgenden Browser [PWAs als WebAPKs](https://web.dev/learn/pwa/installation#webapks): Chrome auf Geräten mit Google Mobile Services (GMS) und Samsung Internet auf Samsung-Geräten.
  Dadurch erhalten die Apps einen eigenen Eintrag im App-Launcher, in der App-Übersicht und in den Systemeinstellungen.
  Firefox, Edge, Opera und andere Browser – einschließlich Chrome auf Geräten ohne GMS – fügen stattdessen eine mit dem Browser-Symbol gekennzeichnete Verknüpfung zum Startbildschirm hinzu, die die Website im Browser öffnet.
- Unter iOS 16.3 und älter können PWAs nur mit Safari installiert werden.
- Unter iOS 16.4 und neuer können PWAs über das Teilen-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop ermöglichen es Nutzern außerdem, jede Website als App zu installieren – unabhängig davon, ob sie eine Manifestdatei hat oder die Kriterien für die Installierbarkeit erfüllt.
Der Vorteil einer Manifestdatei besteht darin, dass der Browser beim Besuch der Website aktiv ihre Installation anbietet und Entwickler das Installationsverhalten anpassen können.

### Die Installationsaufforderung auslösen

Eine PWA kann innerhalb der Seite eine eigene Benutzeroberfläche bereitstellen, über die Nutzer die Installationsaufforderung öffnen können, statt sich auf die standardmäßige Benutzeroberfläche des Browsers zu verlassen. So kann die PWA erklären, warum sich eine Installation lohnt, und die Installationsmöglichkeit leichter auffindbar machen.

Diese Technik beruht auf dem Ereignis [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event), das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Das Ereignis verfügt über eine Methode [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt), mit der die Installationsaufforderung angezeigt wird. Eine PWA kann daher:

- eine eigene Schaltfläche „Installieren“ hinzufügen
- auf das Ereignis `beforeinstallprompt` warten
- das Standardverhalten des Ereignisses durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindern
- im Event-Handler ihrer eigenen Schaltfläche „Installieren“ [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen

Dies wird unter iOS nicht unterstützt.

### Die Installationsaufforderung anpassen

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol der PWA. Wenn Sie Werte für die Manifest-Eigenschaften [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) angeben, werden diese Werte – ausschließlich unter Android – ebenfalls in der Installationsaufforderung angezeigt. Das gibt Nutzern zusätzlichen Kontext und einen weiteren Grund, die PWA zu installieren.

Der folgende Screenshot zeigt die Installationsaufforderung für die [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) in Google Chrome unter Android:

![Installationsaufforderung für PWAmp unter Android](pwamp-install-prompt-android.png)

## Die App starten

Nach der Installation erscheint das Symbol der PWA neben den anderen installierten Apps auf dem Gerät. Durch Auswählen des Symbols wird die App gestartet.

Mit der Manifest-Eigenschaft [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) können Sie den _Anzeigemodus_ festlegen, also bestimmen, wie die PWA beim Start erscheint. Insbesondere gilt:

- `"standalone"` bedeutet, dass die PWA wie eine plattformspezifische Anwendung aussehen und sich so verhalten soll, ohne Benutzeroberflächenelemente des Browsers.
- `"browser"` bedeutet, dass die PWA wie eine gewöhnliche Website in einem neuen Browser-Tab oder -Fenster geöffnet werden soll.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, greift `display` gemäß einer vordefinierten Reihenfolge auf einen unterstützten Anzeigemodus zurück. Mit [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) können Sie diese Reihenfolge neu festlegen.
