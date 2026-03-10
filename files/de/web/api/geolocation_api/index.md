---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Benutzer, seine Position an Webanwendungen zu übermitteln, wenn er dies wünscht. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu melden.

WebExtensions, die das `Geolocation`-Objekt nutzen möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers wird den Benutzer beim ersten Anfordern um Erlaubnis zur Nutzung des Standorts bitten.

> [!NOTE]
> Das {{htmlelement("geolocation")}}-Element bietet einen alternativen Mechanismus zum Zugriff auf und zur Verarbeitung von Geodaten, der einige der Einschränkungen der Geolocation-API löst: Es bietet eine konsistente Benutzeroberfläche und einen intuitiveren Berechtigungsverwaltungsprozess.

## Konzepte und Nutzung

Oftmals wollen Sie die Standortinformationen eines Benutzers in Ihrer Webanwendung abrufen, beispielsweise um dessen Position auf einer Karte darzustellen oder personalisierte Informationen anzeigen zu können, die für dessen Standort relevant sind.

Auf die Geolocation API wird durch einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dies veranlasst den Browser des Benutzers, um Erlaubnis zur Verwendung seiner Standortdaten zu bitten. Wenn er zustimmt, wird der Browser die beste verfügbare Funktionalität des Geräts nutzen, um diese Informationen abzurufen (zum Beispiel GPS).

Der Entwickler kann nun auf diese Standortinformationen auf unterschiedliche Weise zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft die aktuelle Position des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die automatisch jedes Mal aufgerufen wird, wenn sich die Position des Geräts ändert und gibt die aktualisierte Position zurück.

In beiden Fällen nimmt der Methodenaufruf bis zu drei Argumente an:

- Ein obligatorischer Erfolgs-Callback: Wenn das Abrufen der Standortdaten erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, welches Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehler-Callback: Wenn das Abrufen der Standortdaten erfolglos ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, welches Informationen darüber bereitstellt, was schief gelaufen ist.
- Ein optionales Objekt, welches Optionen für das Abrufen der Positionsdaten bietet.

Für weitere Informationen zur Nutzung der Geolocation lesen Sie [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Position des Benutzers, Überwachen von Positionsänderungen und Löschen eines zuvor gesetzten Watches.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Repräsentiert die Position eines Benutzers. Eine Instanz von `GeolocationPosition` wird bei einem erfolgreichen Aufruf einer der Methoden innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) in einem Erfolgs-Callback zurückgegeben und enthält einen Zeitstempel sowie eine Instanz eines [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Repräsentiert die Koordinaten der Position eines Benutzers; eine Instanz von `GeolocationCoordinates` enthält Breiten- und Längengrad sowie weitere wichtige Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird bei einem erfolglosen Aufruf einer der Methoden innerhalb von [`Geolocation`](/de/docs/Web/API/Geolocation) in einem Fehler-Callback zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine Instanz eines [`Geolocation`](/de/docs/Web/API/Geolocation)-Objekts zurück, von dem aus alle weiteren Funktionen zugänglich sind.

## Sicherheitsüberlegungen

Die Geolocation API ermöglicht es Benutzern, programmgesteuert Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) abzurufen.

Der Zugriff kann durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Richtlinie {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} weiter kontrolliert werden.
Die Standard-Erlaubnisliste für `geolocation` ist `self`, was den Zugriff auf Standortinformationen nur in Same-Origin-verschachtelten Frames erlaubt.
Drittparteinutzung wird aktiviert, indem ein `Permissions-Policy`-Antwortheader gesetzt wird, um die Erlaubnis für einen bestimmten Drittanbieter-Origin zu erteilen:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das Attribut `allow="geolocation"` muss dann dem iframe-Element hinzugefügt werden, das Quellen von diesem Origin enthält:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Geolokationsdaten können Informationen offenbaren, die der Gerätebesitzer nicht teilen möchte.
Daher müssen Benutzer explizit die Erlaubnis über ein Prompt erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `gewährt` oder `verweigert`).
Die Laufzeit einer gewährten Erlaubnis hängt vom User Agent ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die [Permissions API](/de/docs/Web/API/Permissions_API) `geolocation`-Berechtigung kann verwendet werden, um zu testen, ob der Zugriff auf Standortinformationen `gewährt`, `verweigert` oder `auffordern` ist (erfordert Benutzerbestätigung eines Prompts).

## Beispiele

Sehen Sie sich [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die positionsbasierte Standortbestimmung oft von Google bereitgestellt wird, ist die Standard-Geolocation-API in China möglicherweise nicht verfügbar. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/service/webService/webServiceGuide/position/webServiceIp) nutzen. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionsbestimmung zu bieten.

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Who moved my geolocation?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
