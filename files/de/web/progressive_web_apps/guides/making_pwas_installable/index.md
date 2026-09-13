---
title: Installierbare PWAs gestalten
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: fec9a9fcfaeef3ed674f60ddda7a46f18208b347
---

Eines der charakteristischen Merkmale einer PWA ist, dass sie vom Browser zur Installation auf dem Gerät vorgeschlagen werden kann. Einmal installiert, erscheint eine PWA den Nutzern wie eine plattformabhängige App, ein permanentes Feature ihres Geräts, das sie direkt vom Betriebssystem aus starten können, genau wie jede andere App.

Wir können dies wie folgt zusammenfassen:

- Unterstützende Browser schlagen dem Nutzer die Installation der PWA auf dem Gerät vor.
- Die PWA kann wie eine plattformabhängige App installiert werden und kann den Installationsprozess anpassen.
- Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattformabhängigen Apps.
- Einmal installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

Wir werden jeden dieser Aspekte in diesem Leitfaden besprechen. Zunächst jedoch werden wir die Anforderungen diskutieren, die eine Web-App erfüllen muss, damit sie für die Installation beworben werden kann.

## Installierbarkeit

Damit eine Web-App von einem unterstützenden Browser zur Installation beworben wird, muss sie einige technische Anforderungen erfüllen. Wir können diese als die Mindestanforderungen betrachten, damit eine Web-App eine PWA ist.

> [!NOTE]
> Obwohl es keine Voraussetzung für eine installierbare PWA ist, verwenden viele PWAs [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.
> Weitere Informationen finden Sie im [CycleTracker: Service Worker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers) Tutorial.

### Das Web-App-Manifest

Ein Web-App-Manifest ist eine JSON-Datei, die dem Browser mitteilt, wie die PWA auf dem Gerät dargestellt und verhalten werden soll. Damit eine Web-App eine PWA ist, muss sie installierbar sein, und damit sie installierbar ist, muss sie ein Manifest enthalten.

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

Wenn die PWA mehr als eine Seite hat, muss jede Seite das Manifest auf diese Weise referenzieren.

Das Manifest enthält ein einziges JSON-Objekt mit einer Sammlung von Mitgliedern, von denen jedes einen Aspekt des Erscheinungsbildes oder Verhaltens der PWA definiert. Hier ist ein eher minimales Manifest, das nur zwei Mitglieder enthält: `"name"` und `"icons"`.

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

Chromium-basierte Browser, einschließlich Google Chrome, Samsung Internet und Microsoft Edge, erfordern, dass das Manifest folgende Mitglieder enthält:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) oder [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) müssen ein 192px- und ein 512px-Icon enthalten
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) und/oder [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)
- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) muss `false` sein oder nicht vorhanden sein

Eine vollständige Beschreibung jedes Mitglieds finden Sie in der Referenzdokumentation des [Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest).

### Erforderliche Verwendung von HTTPS, localhost oder loopback

Damit eine PWA installierbar ist, muss sie über das `https`-Protokoll oder aus einer lokalen Entwicklungsumgebung mit `localhost` oder `127.0.0.1` bereitgestellt werden — mit oder ohne Portnummer.

Dies ist eine strengere Anforderung als [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts), die Ressourcen, die über `file://`-URLs geladen werden, als sicher betrachten.

## Installation aus einem App Store

Nutzer erwarten, Apps im App Store ihrer Plattform zu finden, wie dem Google Play Store oder dem Apple App Store.

Wenn Ihre App die Voraussetzungen für die Installierbarkeit erfüllt, können Sie sie paketieren und über App Stores vertreiben. Der Prozess ist spezifisch für jeden App Store:

- [Anleitung zum Veröffentlichen einer PWA im Google Play Store](https://chromeos.dev/en/publish/pwa-in-play)
- [Anleitung zum Veröffentlichen einer PWA im Microsoft Store](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/microsoft-store)
- [Anleitung zum Veröffentlichen einer PWA im Meta Quest Store](https://developers.meta.com/horizon/resources/publish-submit/)

Der [PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) ist ein Werkzeug, das den Prozess des Verpackens und Veröffentlichens einer PWA für verschiedene App Stores vereinfacht. Er unterstützt den Google Play Store, Microsoft Store, Meta Quest Store und iOS App Store.

Wenn Sie Ihre App dem App Store hinzugefügt haben, können Nutzer sie von dort aus installieren, genau wie eine plattformabhängige App.

## Installation aus dem Web

Wenn ein unterstützender Browser feststellt, dass eine Web-App die zuvor beschriebenen Installierbarkeitskriterien erfüllt, wird die App dem Nutzer zur Installation vorgeschlagen. Dem Nutzer wird die Möglichkeit geboten, die App zu installieren. Dies bedeutet, dass Sie Ihre PWA als Website vertreiben können, wodurch sie über die Websuche auffindbar ist, und sie auch in App Stores vertreiben können, sodass Nutzer sie dort finden können.

Dies ist ein großartiges Beispiel dafür, wie PWAs Ihnen das Beste aus beiden Welten bieten können. Es ist auch ein gutes Beispiel dafür, wie progressive Enhancement mit PWAs funktioniert: Wenn ein Nutzer Ihre PWA im Web findet und einen Browser verwendet, der sie nicht installieren kann, kann er sie wie eine normale Website nutzen.

Die Benutzeroberfläche zum Installieren einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen. Beispielsweise könnte ein Browser ein "Installieren"-Symbol in der URL-Leiste anzeigen, wenn der Nutzer die Seite aufruft:

![Chrome URL-Leiste, zeigt das PWA-Installationssymbol](pwa-install.png)

Wenn der Nutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an, die fragt, ob sie die PWA installieren möchten, und wenn sie zustimmen, wird die PWA installiert.

Die Eingabeaufforderung zeigt den Namen und das Symbol der PWA an, die aus den Manifestmitgliedern [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) entnommen werden.

### Browser-Unterstützung

Die Unterstützung für die Promotion der PWA-Installation vom Web aus variiert je nach Browser und Plattform.

Auf dem Desktop:

- Chromium-Browser unterstützen die Installation von PWAs, die eine Manifestdatei auf allen unterstützten Desktop-Betriebssystemen haben.
- Safari unterstützt "Zum Dock hinzufügen" (_Datei_ > _Zum Dock hinzufügen..._) auf macOS Sonoma (Safari 17) und später für jede Web-App mit oder ohne Manifestdatei.
- Firefox unterstützt die Installation von PWAs mit einer Manifestdatei nicht.

Auf mobilen Geräten:

- Auf Android sind die einzigen Browser, die [PWAs als WebAPKs installieren](https://web.dev/learn/pwa/installation#webapks): Chrome auf Geräten mit Google Mobile Services (GMS) und Samsung Internet auf Samsung-Geräten.
  Dies gibt ihnen einen echten Eintrag im App-Starter und -Switcher sowie in den Systemeinstellungen.
  Firefox, Edge, Opera und andere Browser einschließlich Chrome auf Geräten ohne GMS, fügen stattdessen ein browsergebadgte Home-Screen-Verknüpfung hinzu, die die Seite im Browser öffnet.
- Auf iOS 16.3 und früher können PWAs nur mit Safari installiert werden.
- Auf iOS 16.4 und später können PWAs aus dem Share-Menü in Safari, Chrome, Edge, Firefox und Orion installiert werden.

### Websites als Apps installieren

Chrome für Desktop und Android, Safari für Desktop und Edge für Desktop unterstützen auch das Installieren jeder Website als App, unabhängig davon, ob sie eine Manifestdatei hat oder nicht, und ohne Berücksichtigung der Installierbarkeitskriterien für die Manifestdatei.
Der Vorteil der Verwendung einer Manifestdatei besteht darin, dass der Browser die Website aktiv für die Installation bewirbt, wenn sie besucht wird, und Entwickler das Installationsverhalten anpassen können.

### Auslösen der Installationsaufforderung

Eine PWA kann ihre eigene In-Page-Benutzeroberfläche bereitstellen, um dem Nutzer das Öffnen der Installationsaufforderung zu ermöglichen, anstatt sich auf die standardmäßige vom Browser bereitgestellte Benutzeroberfläche zu verlassen. Dadurch kann eine PWA Kontext und einen Grund für die Nutzer bereitstellen, die PWA zu installieren, und kann helfen, den Installationsablauf für Nutzer leichter auffindbar zu machen.

Diese Technik beruht auf dem [`beforeinstallprompt`](/de/docs/Web/API/Window/beforeinstallprompt_event)-Ereignis, das auf dem globalen [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst wird, sobald der Browser festgestellt hat, dass die PWA installierbar ist. Dieses Ereignis hat eine [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt)-Methode, die die Installationsaufforderung anzeigt. Eine PWA kann also:

- ihren eigenen "Installieren"-Button hinzufügen
- auf das `beforeinstallprompt`-Ereignis hören
- das Standardverhalten des Ereignisses durch Aufrufen von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen
- im Ereignis-Handler für ihren eigenen "Installieren"-Button [`prompt()`](/de/docs/Web/API/BeforeInstallPromptEvent/prompt) aufrufen.

Dies wird auf iOS nicht unterstützt.

### Anpassung der Installationsaufforderung

Standardmäßig enthält die Installationsaufforderung den Namen und das Symbol der PWA. Wenn Sie Werte für die Manifestmitglieder [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description) und [`screenshots`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) angeben, werden diese Werte nur unter Android in der Installationsaufforderung angezeigt, was den Nutzern zusätzliche Kontextinformationen und Motivation zur Installation der PWA bietet.

Das untenstehende Bild zeigt, wie die Installationsaufforderung für das [PWAmp-Demo](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp) auf Google Chrome unter Android aussieht:

![Installationsaufforderung für PWAmp auf Android](pwamp-install-prompt-android.png)

## Starten der App

Sobald die PWA installiert ist, wird ihr Symbol auf dem Gerät neben allen anderen installierten Apps des Nutzers angezeigt, und ein Klick auf das Symbol startet die App.

Sie können das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Manifestmitglied verwenden, um den _Anzeigemodus_ zu steuern: also wie die PWA beim Starten dargestellt wird. Insbesondere:

- `"standalone"` zeigt an, dass die PWA wie eine plattformabhängige Anwendung aussehen und sich anfühlen soll, ohne Browser-Benutzeroberflächenelemente
- `"browser"` gibt an, dass die PWA als neuer Browser-Tab oder -Fenster geöffnet werden soll, genau wie eine normale Website.

Wenn der Browser einen bestimmten Anzeigemodus nicht unterstützt, fällt `display` gemäß einer vordefinierten Reihenfolge auf einen unterstützten Anzeigemodus zurück. Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) ermöglicht es Ihnen, die Rückfallreihenfolge neu zu definieren.
