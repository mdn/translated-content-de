---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen zu spezifizieren, die beschreiben, wie Netzwerk-Anfragen behandelt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerk-Anfragen zu bewerten und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerk-Anfragen zu benachrichtigen.

## Berechtigungen

Um diese API zu nutzen, muss eine Erweiterung entweder die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern. Die Berechtigung `"declarativeNetRequest"` wird den Benutzern in den Berechtigungsaufforderungen angezeigt, die Berechtigung `"declarativeNetRequestWithHostAccess"` nicht.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anfragen zu blockieren und zu aktualisieren, ohne [Hostberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Hostberechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header in Anfragen modifizieren möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` statt der Berechtigung `"declarativeNetRequest"` verwendet wird. Um auf Anfragen in diesen Fällen zu reagieren, sind Hostberechtigungen für die Anforderungs-URL erforderlich. Für alle Anfragen, außer Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind Hostberechtigungen auch für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist in der Regel das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können nicht von Erweiterungen abgeglichen werden. Dazu gehören privilegierte Browser-Anfragen, Anfragen zu oder von [eingeschränkten Domänen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da diese Informationen über abgeglichene deklarative Regeln zurückgeben. Weitere Informationen finden Sie unter [Testen](#testen).

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Obligatorisch und sollte >= 1 sein.
- `priority` – Die Priorität der Regel. Wenn angegeben, sollte sie >= 1 sein. Standardwert ist 1. Siehe [Übereinstimmungspriorität](#übereinstimmungspriorität) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ergriffen wird, wenn die Regel übereinstimmt. Regeln können eines der folgenden Dinge tun:
  - eine Netzwerk-Anfrage blockieren.
  - eine Netzwerk-Anfrage umleiten.
  - Header von einer Netzwerk-Anfrage modifizieren.
  - verhindern, dass eine andere passende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z.B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} ist keine gültige URL).

Dies ist eine Beispielregel, die alle Skriptanfragen blockiert, die von `"foo.com"` zu jeder URL mit `"abc"` als Teilstring stammen:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

Das Feld `urlFilter` einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das mit der Anforderungs-URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Passt zu</th>
<th>Passt nicht zu</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Regelsets

Regeln sind in Regelsets organisiert:

- **statische Regelsets**: Sammlungen von Regeln, die mit dem Manifest-Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelsets bleibt über Sitzungen hinweg bestehen, jedoch nicht über Erweiterungs-Updates. Die bei der Installation und dem Update der Erweiterung aktivierten statischen Regelsets werden durch den Inhalt des Manifest-Schlüssels `"declarative_net_request"` bestimmt.
- **dynamisches Regelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungs-Updates hinweg erhalten.
- **Sitzungsregelset**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browser-Sitzungen hinweg erhalten.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Tests](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, sicherzustellen, dass Ihre statischen Regelsets durch Tests gültig sind.

## Grenzen

### Statik-Regelset-Grenzen

Eine Erweiterung kann:

- statische Regelsets im Manifest-Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- statische Regelsets aktivieren (im Manifest-Schlüssel `"declarative_net_request"` oder programmatisch), sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsets nicht den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten nicht davon ausgehen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl der zusätzlichen Regeln zu ermitteln, die sie aktivieren können.
- Regeln in statischen Regelsets bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsgesteuerte Regeln

Die Anzahl der dynamischen und sitzungsgesteuerten Regeln, die eine Erweiterung hinzufügen kann, ist beschränkt auf:

- In Safari und bis Chrome 119 und Firefox 127 den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128 die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}.

## Übereinstimmungspriorität

Wenn der Browser bewertet, wie Anfragen behandelt werden sollen, prüft er die Regeln jeder Erweiterung, die eine Bedingung haben, die zur Anfrage passt, und wählt die aus, die in folgender Reihenfolge angewendet werden soll:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln auf 1 standardsetzen, wenn keine Priorität festgelegt ist).<br>
   Wenn dies nicht zu einer Regel führt, die angewendet werden soll:
2. die Regelaktion, in der folgenden Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen `main_frame` und `sub_frame`) hat den gleichen Effekt wie "allow", gilt jedoch auch für zukünftige Subressourcen-Ladungen im Dokument (einschließlich der Nachkommen-Frames), die aus der Anfrage generiert werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" schreibt Anforderungs- oder Antwort-Header oder beide um.

> [!NOTE]
> Wenn mehrere übereinstimmende Regeln die gleiche Regelpriorität und den gleichen Regelaktionstyp haben, kann das Ergebnis unklar sein, wenn die übereinstimmende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Beispielsweise:
>
> - Die Aktion "block" unterstützt keine zusätzlichen Eigenschaften und daher besteht keine Uneinigkeit: Alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage an ein Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird alle außer einer "redirect"-Aktion ignoriert. Es ist jedoch weiterhin möglich, wiederholt umzuleiten, wenn die umgeleitete Anfrage eine weitere Regelbedingung erfüllt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig voneinander angewendet werden, wenn sie unterschiedliche Header betreffen. Das Ergebnis ist unklar, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie bei {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Evaluierungsreihenfolge der "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu steuern, in der Aktionen angewendet werden, weisen Sie den Regeln, deren Prioritätsreihenfolge wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach Regelpriorität und Regelaktion berücksichtigt Firefox das Regelset, zu dem die Regel gehört, in dieser Prioritätsordnung: Sitzung > dynamisch > Sitzungsregelsets.
> Dies kann nicht über alle Browser hinweg als gegeben angesehen werden, siehe [WECG Issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage vorgibt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine passende Regel hat, wählt der Browser die zu anwendende Regel in dieser Prioritätsreihenfolge aus:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsets zu helfen. Diese APIs erfordern die Berechtigung `"declarativeNetRequestFeedback"`. Zusätzlich:

- in Chrome sind diese APIs nur für nicht geparkte Erweiterungen verfügbar.
- in Firefox sind diese APIs nur verfügbar, nachdem die `extensions.dnr.feedback`-Einstellung auf `true` gesetzt wurde. Diese Einstellung kann mit `about:config` oder dem [`--pref`-Flag des `web-ext`-CLI-Werkzeugs](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref) gesetzt werden.

## Vergleich mit der webRequest API

- Die API declarativeNetRequest bewertet Netzwerk-Anfragen direkt im Browser. Dies macht sie leistungsstärker als die webRequest API, bei der jede Netzwerk-Anfrage in JavaScript im Erweiterungsprozess ausgewertet wird.
- Da die Anfragen nicht vom Erweiterungsprozess abgefangen werden, entfernt declarativeNetRequest die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Anders als die webRequest API erfordert das Blockieren oder Aktualisieren von Anfragen mit der API declarativeNetRequest keine Hostberechtigungen, wenn sie mit der Berechtigung `declarativeNetRequest` verwendet wird.
- Die API declarativeNetRequest bietet den Nutzern besseren Datenschutz, da Erweiterungen die im Namen des Nutzers durchgeführten Netzwerk-Anfragen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder Iframes, die mit der API declarativeNetRequest blockiert werden, automatisch im DOM geschlossen.
- Beim Entscheiden, ob eine Anfrage blockiert oder umgeleitet werden soll, erhält die API declarativeNetRequest gegenüber der webRequest API Vorrang, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso werden alle mittels der API declarativeNetRequest entfernten Header nicht für Webanfrage-Erweiterungen sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen ermöglicht, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.HeaderInfo")}}
  - : Der Antwort-Header, der für die Anfrage zu übereinstimmen ist, deklariert im Array [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) oder im Array [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders).
- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anforderungs- oder Antwort-Header, die für die Anfrage modifiziert werden sollten.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung erfolgen sollte. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das die Details einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die zu ergreifende Aktion beschreibt, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung beschreibt, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das die Details einer URL-Transformation enthält, die für eine Umleitungsaktion durchgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelset-ID für die dynamischen Regeln, die von der Erweiterung hinzugefügt wurden.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die minimale Anzahl an statischen Regeln, die einer Erweiterung in ihren aktivierten statischen Regelsets garantiert wird.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der für {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} erlaubten Aufrufe innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl an statischen Regeln, die auf jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl an dynamischen und sitzungsgesteuerten Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl an dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl an sitzungsgesteuerten Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsets, die eine Erweiterung als Teil des Manifests [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) angeben kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten sitzungsgesteuerten Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelset zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge an dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung übereinstimmenden Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsgesteuerten Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Prüft, ob ein regulärer Ausdruck als [`declarativeNetRequest.RuleCondition.regexFilter`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#regexfilter) Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Prüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung zu einer hypothetischen Anfrage passen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge an dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsgesteuerten Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, wenn eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
