---
title: declarativeNetRequest.RuleCondition
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition
l10n:
  sourceCommit: 8b4e4810dcf61909fb1b492f4dcf81f1caf43fed
---

{{AddonSidebar}}

Details der Bedingung, die bestimmt, ob eine Regel zu einer Anfrage passt, als Eigenschaft `condition` einer {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `domainType` {{optional_inline}}
  - : Ein `string`. Gibt an, ob die Netzwerkanfrage first-party oder third-party ist. Die Anfrage wird als first-party betrachtet, wenn sie für dieselbe Domain wie das Dokument oder Subdokument erfolgt, das die Anfrage initiiert. Andernfalls wird sie als third-party betrachtet. Wenn weggelassen, werden alle Anfragen zugelassen. Mögliche Werte sind `"firstParty"` und `"thirdParty"`.
- `domains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`initiatorDomains`](#initiatordomains). Die Regel passt nur auf Netzwerkanfragen, die von dieser Liste von Domains stammen.
- `excludedDomains` {{deprecated_inline}} {{optional_inline}}
  - : Ein Array von `string`. Verwenden Sie stattdessen [`excludedInitiatorDomains`](#excludedinitiatordomains). Die Regel passt nicht auf Netzwerkanfragen, die von dieser Liste von Domains stammen.
- `initiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nur auf Netzwerkanfragen, die von dieser Liste von Domains stammen. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden. Dies entspricht dem Anforderungsinitiator und nicht der Anforderungs-URL.
- `excludedInitiatorDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nicht auf Netzwerkanfragen, die von dieser Liste von Domains stammen. Wenn die Liste leer oder weggelassen wird, sind keine Domains ausgeschlossen. Dies hat Vorrang vor `initiatorDomains`. Eine [kanonische Domain](#whocanonical_domain) sollte verwendet werden. Dies entspricht dem Anforderungsinitiator und nicht der Anforderungs-URL.
- `isUrlFilterCaseSensitive` {{optional_inline}}
  - : Ein `boolean`. Ob der [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) (je nach Angabe) Groß- und Kleinschreibung beachtet. Während der Standard auf `false` über verschiedene Browser hinweg im [WECG issue 269](https://github.com/w3c/webextensions/issues/269) konsensiert wird, war der Wert in (älteren) Versionen von Chrome und Safari `true`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.
- `regexFilter` {{optional_inline}}
  - : Ein `string`. Regulärer Ausdruck, der mit der URL der Netzwerkanfrage abgeglichen wird. Beachten Sie:
    - Das unterstützte Format ist nicht stabil und variiert zwischen Browsern, siehe ["Regular expressions in DNR API (regexFilter)" in WECG issue 344](https://github.com/w3c/webextensions/issues/344) für Details.
    - Nur einer von [`urlFilter`](#urlfilter) oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der [`regexFilter`](#regexfilter) muss nur aus [ASCII](/de/docs/Glossary/ASCII)-Zeichen bestehen. Dies wird mit einer URL verglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format (bei internationalisierten Domains) kodiert ist, und alle anderen Nicht-ASCII-Zeichen sind in UTF-8-Prozent-kodiert.
- `requestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nur auf Netzwerkanfragen, wenn die Domain mit einer aus dieser Liste übereinstimmt. Wenn die Liste weggelassen wird, wird die Regel auf Anfragen von allen Domains angewendet. Eine leere Liste ist nicht erlaubt. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `excludedRequestDomains` {{optional_inline}}
  - : Ein Array von `string`. Die Regel passt nicht auf Netzwerkanfragen, wenn die Domains einer aus dieser Liste entspricht. Wenn die Liste leer oder weggelassen wird, sind keine Domains ausgeschlossen. Dies hat Vorrang vor `requestDomains`. Eine [kanonische Domain](#kanonische_domain) sollte verwendet werden.
- `requestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von HTTP-Methoden, auf die die Regel passt. Eine leere Liste ist nicht erlaubt. Die Angabe einer `requestMethods`-Regelbedingung schließt auch nicht-HTTP(s)-Anfragen aus, während die Angabe von [`excludedRequestMethods`](#excludedrequestmethods) dies nicht tut.
- `excludedRequestMethods` {{optional_inline}}
  - : Ein Array von `string`. Liste von Methoden, auf die die Regel nicht passt. Nur eine von [`requestMethods`](#requestmethods) und `excludedRequestMethods` sollte angegeben werden. Wenn keine von ihnen angegeben ist, werden alle Anforderungsmethoden abgeglichen.
- `resourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, mit denen die Regel übereinstimmt. Eine leere Liste ist nicht erlaubt. Dies muss für `"allowAllRequests"`-Regeln angegeben werden und darf nur die Ressourcentypen `"sub_frame"` und `"main_frame"` enthalten.
- `excludedResourceTypes` {{optional_inline}}
  - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Liste von Ressourcentypen, mit denen die Regel nicht übereinstimmt. Nur eine von [`resourceTypes`](#resourcetypes) und `excludedResourceTypes` sollte angegeben werden. Wenn keine von ihnen angegeben ist, werden alle Ressourcentypen außer `"main_frame"` blockiert.
- `tabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, mit der die Regel übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} entspricht Anfragen, die nicht von einem Tab ausgehen. Eine leere Liste ist nicht erlaubt. Nur für sitzungsbezogene Regeln unterstützt.
- `excludedTabIds` {{optional_inline}}
  - : Ein Array von `number`. Liste von {{WebExtAPIRef("tabs.Tab")}}.`id`, mit der die Regel nicht übereinstimmen soll. Eine ID von {{WebExtAPIRef("tabs.TAB_ID_NONE")}} schließt Anfragen aus, die nicht von einem Tab ausgehen. Nur für sitzungsbezogene Regeln unterstützt.
- `urlFilter` {{optional_inline}}

  - : Ein `string`. Das Muster, das mit der URL der Netzwerkanfrage verglichen wird. Unterstützte Konstrukte:

    - `*` : Platzhalter: Passt auf beliebig viele Zeichen.
    - `|` : Linker oder rechter Anker: Wenn es am Anfang oder Ende des Musters verwendet wird, gibt es den Anfang oder das Ende der URL an.
    - `||` : Domainname-Anker: Wenn es am Anfang des Musters verwendet wird, gibt es den Beginn einer (Sub-)Domain der URL an.
    - `^` : Trennzeichen-Zeichen: Dies entspricht allem außer einem Buchstaben, einer Ziffer oder einem der Zeichen `_`, `-`, `.`, oder `%`. Das letzte `^` kann auch dem Ende der URL statt einem Trennzeichen entsprechen.

    `urlFilter` besteht aus folgenden Teilen: (optional linker/Domainname-Anker) + Muster + (optional rechter Anker).
    Wenn weggelassen, werden alle URLs abgeglichen. Ein leerer String ist nicht erlaubt.
    Ein Muster, das mit `||*` beginnt, ist nicht erlaubt. Verwenden Sie stattdessen `*`.
    Beachten Sie:

    - Nur einer von `urlFilter` oder [`regexFilter`](#regexfilter) kann angegeben werden.
    - Der `urlFilter` muss nur aus ASCII-Zeichen bestehen. Dieser wird mit einer URL verglichen, bei der der Host im [Punycode](https://de.wikipedia.org/wiki/Punycode)-Format kodiert ist (bei internationalisierten Domains), und alle anderen nicht-ASCII-Zeichen werden in UTF-8-Prozent-kodiert. Zum Beispiel, wenn die Anforderungs-URL `http://abc.рф?q=ф` ist, wird der `urlFilter` mit der URL `http://abc.xn--p1ai/?q=%D1%84` abgeglichen.

### Kanonische Domain

Domains, die in `initiatorDomains`, `excludedInitiatorDomains`, `requestDomains` oder `excludedRequestDomains` angegeben sind, sollten den folgenden Richtlinien entsprechen:

- Subdomains wie "a.example.com" sind erlaubt.
- Die Einträge müssen nur aus _kleinen ASCII_ Zeichen bestehen.
- Verwenden Sie die [Punycode](https://de.wikipedia.org/wiki/Punycode)-Kodierung für internationalisierte Domains.
- IPv4-Adressen müssen als 4 durch Punkte getrennte Zahlen dargestellt werden.
- IPv6-Adressen sollten in ihrer kanonischen Form dargestellt und in eckige Klammern gesetzt werden.

Um die kanonische Domain für eine URL programmatisch zu generieren, verwenden Sie das [URL-API](/de/docs/Web/API/URL) und lesen deren `hostname`-Eigenschaft, z.B. `new URL(url).hostname`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
