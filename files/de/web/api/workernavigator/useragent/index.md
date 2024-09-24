---
title: "WorkerNavigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/WorkerNavigator/userAgent
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`WorkerNavigator.userAgent`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die den User-Agent-String für den aktuellen Browser zurückgibt.

> [!NOTE]
> Die Spezifikation fordert, dass Browser über dieses Feld so wenig Informationen wie möglich bereitstellen. Gehen Sie niemals davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, ihn gar nicht oder nur für aktuelle und vergangene Browserversionen zu verwenden. Neue Browser können denselben UA oder einen Teil davon wie ein älterer Browser verwenden: Sie haben wirklich keine Garantie dafür, dass der angegebene Browser-Agent tatsächlich der ist, der von dieser Eigenschaft angegeben wird.
>
> Bedenken Sie auch, dass Nutzer eines Browsers den Wert dieses Feldes ändern können, wenn sie möchten (UA-Spoofing).

Die Browser-Identifizierung basierend auf der Erkennung des User-Agent-Strings ist **unzuverlässig** und **wird nicht empfohlen**, da der User-Agent-String benutzerkonfigurierbar ist. Zum Beispiel:

- In Firefox können Sie die Präferenz `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun dies; allerdings wird dadurch nur der gesendete HTTP-Header geändert und nicht die von JavaScript durchgeführte Browser-Erkennung beeinflusst.
- Opera 6+ ermöglicht es Benutzern, den Browser-Identifizierungsstring über ein Menü festzulegen.

## Wert

Ein String, der den vollständigen User-Agent-String angibt, den der Browser sowohl in {{Glossary("HTTP")}}-Headern als auch als Antwort auf diese und andere verwandte Methoden auf dem {{domxref("WorkerNavigator")}}-Objekt bereitstellt.

Der User-Agent-String basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann. Jedes dieser Informationsstücke stammt von anderen Navigator-Eigenschaften, die ebenfalls vom Benutzer festgelegt werden können. Auf Gecko basierende Browser halten sich an die folgende allgemeine Struktur:

```plain
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## Beispiele

```js
alert(navigator.userAgent);
// zeigt "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1" an
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
