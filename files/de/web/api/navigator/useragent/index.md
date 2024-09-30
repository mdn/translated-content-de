---
title: "Navigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/Navigator/userAgent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte **`Navigator.userAgent`**-Eigenschaft gibt den User-Agent-String für den aktuellen Browser zurück.

> [!NOTE]
> Die Spezifikation fordert Browser auf, über dieses Feld so wenig Informationen wie möglich bereitzustellen. Gehen Sie niemals davon aus, dass der Wert dieser Eigenschaft in zukünftigen Versionen desselben Browsers gleich bleibt. Versuchen Sie, ihn überhaupt nicht oder nur für aktuelle und frühere Versionen eines Browsers zu verwenden. Neue Browser können denselben UA oder Teile davon wie ein älterer Browser verwenden: Sie haben wirklich keine Garantie, dass der Browser-Agent tatsächlich derjenige ist, der durch diese Eigenschaft angekündigt wird.
>
> Bedenken Sie auch, dass Benutzer eines Browsers den Wert dieses Feldes ändern können, wenn sie möchten (UA-Spoofing).

Die Browser-Identifizierung basierend auf der Erkennung des User-Agent-Strings ist **unzuverlässig** und **wird nicht empfohlen**, da der User-Agent-String benutzerkonfigurierbar ist. Zum Beispiel:

- In Firefox können Sie die Präferenz `general.useragent.override` in `about:config` ändern. Einige Firefox-Erweiterungen tun dies; dies ändert jedoch nur den HTTP-Header, der gesendet wird und von `navigator.userAgent` zurückgegeben wird. Es kann andere Methoden geben, die JavaScript-Code verwenden, um den Browser zu identifizieren.
- Opera 6+ erlaubt es den Benutzern, den Browser-Identifizierungsstring über ein Menü festzulegen.

## Wert

Ein String, der den vollständigen User-Agent-String angibt, den der Browser sowohl in den [HTTP](/de/docs/Glossary/HTTP)-Headern als auch als Antwort auf diese und andere verwandte Methoden des [`Navigator`](/de/docs/Web/API/Navigator)-Objekts bereitstellt.

Der User-Agent-String basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann. Jedes dieser Informationsstücke stammt von anderen Navigator-Eigenschaften, die ebenfalls durch den Benutzer einstellbar sind. Weitere Informationen zur Form des User-Agent-Strings finden Sie im {{HTTPHeader("User-agent")}}-HTTP-Header.

## Beispiele

```js
alert(window.navigator.userAgent);
// alerts "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
