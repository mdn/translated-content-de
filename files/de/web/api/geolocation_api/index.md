---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Nutzer, seine Position an Webanwendungen weiterzugeben, falls er dies wünscht. Aus Datenschutzgründen wird der Nutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Nutzers wird den Nutzer beim ersten Anfordern um Erlaubnis bitten, Standortzugriff zu gewähren.

> [!NOTE]
> Das {{htmlelement("geolocation")}}-Element bietet einen alternativen Mechanismus zum Zugreifen und Verarbeiten von Geolokalisierungsdaten, der einige der Schwächen der Geolocation API löst: Es stellt eine konsistente Benutzeroberfläche und einen intuitiveren Berechtigungsverwaltungsprozess bereit.

## Konzepte und Nutzung

Häufig möchten Sie in Ihrer Webanwendung Standortinformationen eines Benutzers abrufen, um beispielsweise seine Position auf einer Karte anzuzeigen oder personalisierte Informationen, die für seinen Standort relevant sind, bereitzustellen.

Auf die Geolocation API wird über einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies veranlasst den Browser des Nutzers, um Erlaubnis zu bitten, auf seine Standortdaten zuzugreifen. Wenn er zustimmt, verwendet der Browser die bestmögliche Funktionalität des Geräts, um diese Informationen zu erhalten (zum Beispiel GPS).

Der Entwickler kann nun in verschiedenen Wegen auf diese Standortinformationen zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft die aktuelle Position des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die automatisch jedes Mal aufgerufen wird, wenn sich die Position des Geräts ändert und die aktualisierte Position zurückgibt.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente entgegen:

- Ein zwingender Erfolgscallback: Wenn der Standortabruf erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugang zu den Standortdaten bietet.
- Ein optionaler Fehlercallback: Wenn der Standortabruf fehlschlägt, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Zugang zu Informationen darüber bietet, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für den Abruf der Positionsdaten bereitstellt.

Für weitere Informationen zur Nutzung von Geolocation lesen Sie [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden, um die aktuelle Position des Nutzers abzurufen, Änderungen seiner Position zu beobachten und einen zuvor gesetzten Beobachter zu entfernen.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Nutzers. Eine Instanz von `GeolocationPosition` wird bei einem erfolgreichen Aufruf einer der innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden innerhalb eines Erfolgscallbacks zurückgegeben und enthält einen Zeitstempel sowie eine Instanz eines [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Stellt die Koordinaten der Position eines Nutzers dar; eine Instanz von `GeolocationCoordinates` enthält Latitude, Longitude und andere wichtige verwandte Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird bei einem fehlgeschlagenen Aufruf einer der innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden innerhalb eines Fehlercallback zurückgegeben und enthält einen Fehlercode und eine Nachricht.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz eines [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekts zurück, von dem aus alle anderen Funktionalitäten zugänglich sind.

## Sicherheitsüberlegungen

Die Geolocation API ermöglicht es Nutzern, über [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) programmgesteuert auf Standortinformationen zuzugreifen.

Der Zugriff kann zusätzlich durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} kontrolliert werden.
Die standardmäßige Erlaubnisliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in verschachtelten Frames mit demselben Ursprung erlaubt.
Für die Nutzung durch Dritte muss ein `Permissions-Policy`-Response-Header gesetzt werden, um Dritten aus einem bestimmten Ursprung die Erlaubnis zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das `allow="geolocation"`-Attribut muss dann dem iframe-Element hinzugefügt werden, das Quellen von diesem Ursprung enthält:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Geolokalisierungsdaten können Informationen offenbaren, die der Gerätebesitzer nicht teilen möchte.
Deshalb müssen Nutzer ausdrücklich die Erlaubnis über eine Eingabeaufforderung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Gültigkeitsdauer einer erteilten Erlaubnis hängt vom Benutzeragenten ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die [Permissions API](/de/docs/Web/API/Permissions_API)-Erlaubnis `geolocation` kann verwendet werden, um zu testen, ob der Zugriff zur Nutzung von Standortinformationen `granted`, `denied` oder `prompt` ist (erfordert die Bestätigung einer Eingabeaufforderung durch den Benutzer).

## Beispiele

Siehe [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die positionsbestimmende Dienstleistung oft von Google bereitgestellt wird, kann die normale Geolocation API in China möglicherweise nicht verfügbar sein. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/tool/component-geolocation.html) nutzen. Diese Dienste verwenden die IP-Adresse des Nutzers und/oder eine lokale App, um verbesserte Standortinformationen bereitzustellen.

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
