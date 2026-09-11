---
title: Geolocation API
slug: Web/API/Geolocation_API
l10n:
  sourceCommit: b0e389028c444c28975be392cf8bb9886224208c
---

{{securecontext_header}}{{DefaultAPISidebar("Geolocation API")}}

Die **Geolocation API** ermöglicht es dem Benutzer, Webanwendungen auf Wunsch seinen Standort bereitzustellen. Aus Datenschutzgründen wird der Benutzer um Erlaubnis gebeten, Standortinformationen zu übermitteln.

WebExtensions, die das `Geolocation`-Objekt verwenden möchten, müssen die Berechtigung `"geolocation"` zu ihrem Manifest hinzufügen. Das Betriebssystem des Benutzers fordert ihn beim ersten Anfordern des Standortzugriffs dazu auf, diesen zu erlauben.

> [!NOTE]
> Das Element {{htmlelement("geolocation")}} bietet einen alternativen Mechanismus für den Zugriff auf und die Verarbeitung von Geolokalisierungsdaten, der einige der Schwächen der Geolocation API behebt: Es bietet eine konsistente Benutzeroberfläche und einen intuitiveren Prozess zur Berechtigungsverwaltung.

## Konzepte und Verwendung

Oft möchten Sie in Ihrer Web-App Standortinformationen eines Benutzers abrufen, beispielsweise um seinen Standort auf einer Karte darzustellen oder personalisierte Informationen anzuzeigen, die für seinen Standort relevant sind.

Auf die Geolocation API wird über einen Aufruf von [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) zugegriffen; dadurch fordert der Browser des Benutzers ihn auf, die Berechtigung zum Zugriff auf seine Standortdaten zu erteilen. Wenn er zustimmt, verwendet der Browser die beste auf dem Gerät verfügbare Funktionalität, um auf diese Informationen zuzugreifen (beispielsweise GPS).

Der Entwickler kann nun auf verschiedene Arten auf diese Standortinformationen zugreifen:

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition): Ruft den aktuellen Standort des Geräts ab.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition): Registriert eine Handler-Funktion, die jedes Mal automatisch aufgerufen wird, wenn sich die Position des Geräts ändert, und den aktualisierten Standort zurückgibt.

In beiden Fällen akzeptiert der Methodenaufruf bis zu drei Argumente:

- Ein obligatorischer Erfolgs-Callback: Wenn das Abrufen des Standorts erfolgreich ist, wird der Callback mit einem [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einzigem Parameter ausgeführt, das Zugriff auf die Standortdaten bietet.
- Ein optionaler Fehler-Callback: Wenn das Abrufen des Standorts nicht erfolgreich ist, wird der Callback mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einzigem Parameter ausgeführt, das Informationen darüber bereitstellt, was schiefgelaufen ist.
- Ein optionales Objekt, das Optionen für das Abrufen der Positionsdaten bereitstellt.

Weitere Informationen zur Verwendung von Geolocation finden Sie unter [Verwenden der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Schnittstellen

- [`Geolocation`](/de/docs/Web/API/Geolocation)
  - : Die Hauptklasse dieser API — enthält Methoden zum Abrufen der aktuellen Position des Benutzers, zum Überwachen von Änderungen seiner Position und zum Löschen einer zuvor eingerichteten Überwachung.
- [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)
  - : Stellt die Position eines Benutzers dar. Eine `GeolocationPosition`-Instanz wird innerhalb eines Erfolgs-Callbacks durch einen erfolgreichen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden zurückgegeben und enthält einen Zeitstempel sowie eine [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objektinstanz.
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
  - : Stellt die Koordinaten der Position eines Benutzers dar; eine `GeolocationCoordinates`-Instanz enthält Breitengrad, Längengrad und weitere wichtige zugehörige Informationen.
- [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
  - : Ein `GeolocationPositionError` wird innerhalb eines Fehler-Callbacks durch einen nicht erfolgreichen Aufruf einer der in [`Geolocation`](/de/docs/Web/API/Geolocation) enthaltenen Methoden zurückgegeben und enthält einen Fehlercode und eine Fehlermeldung.

### Erweiterungen anderer Schnittstellen

- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
  - : Der Einstiegspunkt in die API. Gibt eine [`Geolocation`](/de/docs/Web/API/Geolocation)-Objektinstanz zurück, über die auf alle weiteren Funktionen zugegriffen werden kann.

## Sicherheitsaspekte

Die Geolocation API ermöglicht Benutzern den programmatischen Zugriff auf Standortinformationen in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts).

Der Zugriff kann außerdem durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/geolocation","geolocation")}} gesteuert werden.
Die Standard-Allowlist für `geolocation` ist `self`, wodurch der Zugriff auf Standortinformationen nur in verschachtelten Frames desselben Ursprungs erlaubt wird.
Die Nutzung durch Dritte wird aktiviert, indem ein `Permissions-Policy`-Response-Header festgelegt wird, der einem bestimmten Drittanbieter-Ursprung die Berechtigung erteilt:

```http
Permissions-Policy: geolocation=(self b.example.com)
```

Das Attribut `allow="geolocation"` muss dann dem iframe-Element mit Quellen dieses Ursprungs hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="geolocation"></iframe>
```

Geolokalisierungsdaten können Informationen offenlegen, die der Eigentümer des Geräts nicht teilen möchte.
Daher müssen Benutzer über eine Aufforderung ausdrücklich ihre Zustimmung erteilen, wenn entweder [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) oder [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wird (es sei denn, der Berechtigungsstatus ist bereits `granted` oder `denied`).
Die Gültigkeitsdauer einer erteilten Berechtigung hängt vom User-Agent ab und kann zeitbasiert, sitzungsbasiert oder sogar dauerhaft sein.
Die `geolocation`-Berechtigung der [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu prüfen, ob der Zugriff zur Verwendung von Standortinformationen `granted`, `denied` oder `prompt` ist (erfordert die Bestätigung einer Aufforderung durch den Benutzer).

## Beispiele

Beispielcode finden Sie unter [Verwenden der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Verfügbarkeit

Da die WLAN-basierte Standortbestimmung häufig von Google bereitgestellt wird, ist die standardmäßige Geolocation API in China möglicherweise nicht verfügbar. Sie können lokale Drittanbieter wie [Baidu](https://lbsyun.baidu.com/index.php?title=jspopular/guide/geolocation), [Autonavi](https://lbs.amap.com/api/javascript-api/guide/services/geolocation#geolocation) oder [Tencent](https://lbs.qq.com/service/webService/webServiceGuide/position/webServiceIp) verwenden. Diese Dienste verwenden die IP-Adresse des Benutzers und/oder eine lokale App, um eine verbesserte Positionsbestimmung bereitzustellen.

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- [Verwenden der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [Wer hat meine Geolokalisierung verschoben?](https://hacks.mozilla.org/2013/10/who-moved-my-geolocation/) (Hacks-Blog)
